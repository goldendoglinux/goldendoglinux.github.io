---
sidebar_position: 2
---

# Creación de Medios de Instalación

Esta guía te ayudará a crear una unidad USB de arranque para instalar GoldenDog Linux en tu Equipo. Necesitarás una unidad USB con al menos 4GB de capacidad.

:::warning
Crear un USB de arranque **borrará todos los datos** que se encuentren actualmente en la unidad. Por favor, haz una copia de seguridad de cualquier archivo importante antes de continuar.
:::

## Windows (usando Rufus)

[Rufus](https://rufus.ie/) es una herramienta pequeña y confiable para crear unidades USB de arranque en Windows.

1.  Descarga y ejecuta la última versión de Rufus.
2.  Inserta tu unidad USB.
3.  Haz clic en **SELECCIONAR** (SELECT) y elige la ISO de GoldenDog Linux que descargaste.
4.  Deja el resto de los ajustes por defecto (se recomienda GPT/UEFI para máquinas modernas).
5.  Haz clic en **EMPEZAR** (START).
6.  Si se te solicita, selecciona **Escribir en modo Imagen ISO**.

## macOS (usando balenaEtcher)

[balenaEtcher](https://www.balena.io/etcher/) es la herramienta más sencilla para usuarios de macOS.

1.  Descarga e instala balenaEtcher.
2.  Inserta tu unidad USB.
3.  Haz clic en **Flash from file** (Flashear desde archivo) y selecciona la ISO de GoldenDog.
4.  Haz clic en **Select target** (Seleccionar objetivo) y elige tu unidad USB.
5.  Haz clic en **Flash!** (es posible que debas ingresar tu contraseña de Mac).

## Linux

En Linux, tienes varias opciones dependiendo de tu preferencia.

### 1. Usando `dd` (Línea de comandos)
El método más universal. Abre tu terminal y ejecuta:


Lista tus unidades con `lsblk` o `fdisk -l` y selecciona la unidad correcta.

```bash
# Reemplaza /dev/sdX con la ruta real de tu dispositivo USB
sudo dd if=goldendog-2.0.0.iso of=/dev/sdX bs=4M status=progress && sync
```

:::danger
dd es una herramienta muy potente (y a menudo destructiva). Ten mucho cuidado con el parámetro `of=/dev/sdX`. Seleccionar la unidad incorrecta puede resultar en la pérdida permanente de datos en las unidades de tu sistema.
En la herramienta dd, "if" es el archivo de entrada (la iso) y "of" es el archivo de salida (la unidad usb).
:::

### 2. Usando balenaEtcher (GUI)
Al igual que en macOS, balenaEtcher funciona perfectamente en Linux (disponible como AppImage).

### 3. Usando KDE ISO Image Writer
Si ya estás en un sistema KDE (como GoldenDog), puedes usar **ISO Image Writer** disponible en los repositorios.

1.  Instálalo mediante `sudo apt install isoimagewriter` si no está presente.
2.  Abre **ISO Image Writer**.
3.  Selecciona la ISO de GoldenDog y tu unidad USB.
4.  Haz clic en **Escribir**.
