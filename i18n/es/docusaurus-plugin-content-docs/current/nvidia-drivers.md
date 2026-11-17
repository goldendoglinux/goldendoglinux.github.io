---
sidebar_position: 4
---

# Instalación de Controladores NVIDIA

A diferencia de AMD o Intel, NVIDIA no abre su código ni al kernel de Linux ni a ninguna distribución. Por lo tanto, el controlador de NVIDIA es siempre **privativo**, sin importar la distribución que utilices.

## ¿Por qué usar los paquetes del repositorio?

El binario que se descarga de la página oficial de NVIDIA es exactamente el mismo que se ofrece en el paquete `nvidia-driver` de Debian/GoldenDog. Sin embargo, instalarlo desde los repositorios oficiales ofrece una ventaja crucial: **Estabilidad durante las actualizaciones.**

Además, el paquete oficial garantiza una integración perfecta con los componentes principales del sistema:
- **DKMS**: Recompila automáticamente los módulos para nuevos kernels.
- **APT**: Gestiona dependencias y actualizaciones de seguridad.
- **Secure Boot**: Maneja los requisitos de firma digital.
- **Initramfs**: Asegura que el controlador se cargue correctamente desde la etapa inicial del arranque.

### La trampa de la "Instalación Manual"
Si instalas el controlador manualmente usando un archivo `.run` del sitio de NVIDIA:
1. El instalador compila un módulo del kernel específicamente para tu versión de kernel **actual**.
2. Cuando el sistema actualiza el kernel, ese módulo deja de ser válido.
3. El sistema podría fallar al iniciar la sesión gráfica hasta que recompiles manualmente el controlador.

Al usar el paquete del repositorio, el sistema utiliza **DKMS** para recompilar automáticamente el módulo del controlador cada vez que se instala un nuevo kernel.

:::danger NO INSTALAR MANUALMENTE
No se recomienda bajo ningún concepto instalar el controlador NVIDIA utilizando los archivos `.run` descargados fuera de la distribución. Esta es la causa principal de fallos en el sistema tras una actualización.
:::

## Guía de Instalación

### Opción 1: Lo más reciente (Backports)
Para los usuarios que buscan el mejor rendimiento, las funciones más recientes del controlador y un mejor soporte para **Wayland**, recomendamos utilizar el repositorio de *backports*. Esto garantiza que tengas tanto el kernel más reciente como el último controlador compatible.

```bash
sudo apt update
sudo apt -t trixie-backports install nvidia-driver linux-image-amd64 linux-headers-amd64 -y
```

### Opción 2: Versión Stable
Si prefieres mantenerte en la versión estable estándar (probada y actualizada siempre junto con tu kernel actual), ejecuta:

```bash
sudo apt update
sudo apt install nvidia-driver
```

En algunos sistemas (especialmente GPUs Turing como la RTX 2080 Ti), instala también las cabeceras del kernel coincidentes y el firmware non-free para que DKMS compile sin problemas:

```bash
sudo apt install -y linux-headers-$(uname -r) firmware-misc-nonfree
```

## Si NVIDIA no carga en absoluto

En algunas GPUs NVIDIA, el controlador de código abierto `nouveau` nunca llega a mostrar una pantalla usable. El controlador privativo aún no está cargado, así que obtienes una pantalla negra o un arranque temprano congelado — sin escritorio por el que navegar.

Hasta que instales el controlador del repositorio, recupera el sistema **escribiendo a mano una edición temporal de GRUB en cada arranque**:

1. En el menú de GRUB, resalta la entrada del kernel de GoldenDog y pulsa `e`.
2. En la línea `linux`, quita `quiet` (opcional, para ver errores) y añade `nomodeset`.
3. Arranca con `Ctrl + X`.
4. Cambia a una consola de texto con `Ctrl + Alt + F3`, inicia sesión e instala el controlador del repositorio (Opción 1 o 2 de arriba).
5. Tras la instalación, asegúrate de que `nomodeset` **no** quede en `/etc/default/grub`, y luego ejecuta:

```bash
sudo update-grub
sudo reboot
```

`nomodeset` es solo un apaño escrito a mano para poder llegar a un TTY. Una vez instalado `nvidia-driver`, quítalo para que `nvidia-drm` cargue con normalidad.

### Verificar

```bash
nvidia-smi
```

Deberías ver la versión del controlador privativo (por ejemplo `550.x`) y tu GPU listada.

## Post-Instalación
Una vez finalizada la instalación, reinicia tu computadora para cargar los nuevos controladores.

```bash
sudo reboot
```
