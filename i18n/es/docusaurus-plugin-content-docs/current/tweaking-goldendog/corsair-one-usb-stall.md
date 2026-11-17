---
sidebar_position: 5
---

# Corregir un arranque lento por USB en Corsair ONE

Algunas máquinas Corsair ONE (placas MSI Z370I) pasan aproximadamente un minuto en el kernel durante el arranque con mensajes repetidos como:

```text
usb 1-11: device descriptor read/64, error -110
```

## Causa

En las unidades Corsair ONE afectadas, los puertos **USB2 `1-11` y su par USB3 `2-5`** son puertos internos/fantasma cableados que nunca terminan la negociación del descriptor. El kernel los reintenta durante mucho tiempo antes de continuar.

Es fácil atribuirlo por error a un dongle externo (receptor del teclado, base de carga inalámbrica, cable del Apple Watch). Esos dispositivos pueden quedarse conectados. El retraso lo provoca el puerto fantasma interno al hacer timeout, no un periférico extraíble normal.

## Por qué un servicio de systemd solo no basta

Un oneshot que ejecuta:

```bash
echo 1 > /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable
```

sirve como respaldo, pero systemd suele arrancar **después** de que el kernel ya haya gastado la mayor parte de ese minuto sondando USB. Hay que deshabilitar el puerto más temprano, y acortar el timeout del descriptor como red de seguridad.

## Solución

### 1. Línea de comandos del kernel (`/etc/default/grub`)

Añade los quirks USB de Corsair y un timeout corto para el descriptor inicial:

```bash
GRUB_CMDLINE_LINUX_DEFAULT="usbcore.quirks=1b1c:0c04:k,1b1c:0c10:k,1b1c:0c15:k usbcore.initial_descriptor_timeout=1000"
```

Luego:

```bash
sudo update-grub
```

(Conserva cualquier otra opción que ya tengas en esa línea; combínalas con cuidado.)

### 2. Deshabilitación temprana en initramfs

Crea `/etc/initramfs-tools/scripts/init-top/disable-usb1-11`:

```sh
#!/bin/sh
# Disable stuck Corsair ONE hardwired USB port before/during hub enum.
# Port 1-11 (USB2) + peer 2-5 (USB3) cause long error -110 timeouts.
PREREQ=""
prereqs() { echo "$PREREQ"; }
case $1 in
	prereqs) prereqs; exit 0 ;;
esac

(
	i=0
	while [ "$i" -lt 200 ]; do
		ok=0
		if [ -e /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable ]; then
			echo 1 > /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable 2>/dev/null && ok=1
		fi
		if [ -e /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable ]; then
			echo 1 > /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable 2>/dev/null
		fi
		[ "$ok" -eq 1 ] && exit 0
		i=$((i + 1))
		sleep 0.05
	done
) &
```

```bash
sudo chmod +x /etc/initramfs-tools/scripts/init-top/disable-usb1-11
sudo update-initramfs -u
```

### 3. Respaldo con systemd (opcional pero recomendado)

`/etc/systemd/system/disable-usb1-11.service`:

```ini
[Unit]
Description=Disable stuck hardwired USB port 1-11 (and USB3 peer 2-5)
DefaultDependencies=no
After=systemd-udevd.service sys-bus-usb.mount
Before=basic.target

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStart=/bin/sh -c 'for i in 1 2 3 4 5 6 7 8 9 10; do \
  ok=1; \
  if [ -e /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable ]; then echo 1 > /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable; else ok=0; fi; \
  if [ -e /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable ]; then echo 1 > /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable; else ok=0; fi; \
  [ $ok -eq 1 ] && exit 0; \
  sleep 0.2; \
done; exit 1'

[Install]
WantedBy=sysinit.target
```

```bash
sudo systemctl enable --now disable-usb1-11.service
```

## Verificar después del reinicio

```bash
systemd-analyze
cat /proc/cmdline
sudo dmesg | grep '1-11'
cat /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable
cat /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable
```

Lo deseable es:

- `usbcore.initial_descriptor_timeout=1000` en la cmdline
- tiempo de kernel mucho más cerca de unos pocos segundos que de ~70s
- poco o ningún spam largo de `error -110` para `1-11`
- ambos archivos `disable` de los puertos leyendo `1`

## Notas de BIOS que ayudaron en MSI Z370I

- Boot Mode: Pure UEFI
- Secure Boot: Disabled
- XHCI Hand-off: Enabled
- Legacy USB Support: Disabled
- SATA/Storage: AHCI

## Relacionado

Si la misma máquina también falla al iniciar la sesión gráfica con una GPU RTX, consulta [Instalación de Controladores NVIDIA](../nvidia-drivers.md) — en especial la sección sobre recuperación cuando NVIDIA no carga en absoluto.
