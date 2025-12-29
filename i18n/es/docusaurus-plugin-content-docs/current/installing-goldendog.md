---
sidebar_position: 3
---

# Instalación de GoldenDog Linux

Instalar GoldenDog es un proceso sencillo, ya sea que lo instales en una computadora física o en una máquina virtual.

## Antes de Comenzar

Puedes instalar GoldenDog en:
- **Hardware Físico**: Consulta la [Guía de Creación de Medios](./installation-guide.md) para preparar tu unidad USB.
- **Máquinas Virtuales**: Para una prueba rápida y fácil, puedes usar **[Spin VM de Alexia](https://github.com/alexiarstein/spin-vm)**. Crea una VM instantánea con un disco virtual de 20GB, lo cual es perfecto para probar GoldenDog.

:::info Arquitectura Soportada
Por el momento, GoldenDog sólo soporta arquitecturas **amd64** (Intel/AMD de 64 bits). No es compatible con Raspberry Pi ni RISC-V. 
Si necesitas esas versiones, consulta los [Puertos de Debian](https://wiki.debian.org/Ports/riscv64) o las [imágenes para Raspberry Pi](https://raspi.debian.net/tested-images/).

Asimismo, está en los planes lanzar una versión ARM64. Proximamente se realizarán los anuncios. 
:::

## Pasos de Instalación

### 1. Idioma y Región
Seleccionar correctamente el idioma y la región es vital para la configuración de fecha, hora y localización del sistema.
- Puedes seleccionar un idioma diferente al de tu región (por ejemplo, idioma inglés con región Argentina).
- Si tu país no aparece en la lista bajo el idioma elegido, selecciona **"Otro"** (Other) para encontrar tu ubicación específica.

### 2. Configuración de Red
El instalador buscará dispositivos de red.
- **Laptops**: El instalador suele detectar las tarjetas WiFi (a menudo llamadas `wlp*`).
- **Configuración WiFi**: Selecciona tu tarjeta inalámbrica, elige tu red y proporciona la contraseña (usualmente **WPA/PSK**).

### 3. Nombre de Host y Dominio
- **Nombre de Host (Hostname)**: Es el "nombre" de tu máquina en la red. El valor predeterminado es `goldendog`, pero puedes cambiarlo por el que prefieras.
- **Nombre de Dominio**: Sirve para la identificación dentro de una red. Si no estás seguro, puedes usar cualquier nombre o dejarlo como está.

### 4. Cuentas de Usuario y Root
Se te pedirá configurar dos tipos de cuentas:
- **Cuenta Root**: Es el administrador del sistema. Se recomienda encarecidamente elegir una **contraseña diferente** a la de tu cuenta de usuario personal.
  - *Consejo*: Si dejas la contraseña de root en blanco, la cuenta root se desactivará para el inicio de sesión directo, pero se le otorgarán permisos de administrador a tu usuario a través de `sudo`.
- **Cuenta de Usuario**: Esta será tu cuenta principal. La primera cuenta creada se añade automáticamente al grupo `sudo`.

### 5. Particionado de Disco
- **Nuevos Usuarios**: Selecciona **"Guiado - utilizar todo el disco"** y **"Todos los archivos en una partición"**. Esta es la opción más segura y fácil para laptops o pruebas.
- **Usuarios Avanzados**: Solo utiliza **LVM** (*Logical Volume Manager*) si estás desplegando un servidor o tienes varios discos duros y estás familiarizado con su funcionamiento.

:::important
Debes seleccionar **"Escribir cambios en el disco"** para confirmar el particionado y continuar.
:::

### 6. Configuración del Sistema
- **Configuración de Proxy**: La mayoría de los usuarios deben dejar este campo **en blanco**. Solo ingresa información aquí si te encuentras en un entorno corporativo o de oficina que requiera un proxy (ej. `usuario:pass@proxy:puerto`).
- **Concurso de Popularidad (Popularity Contest)**: Esto ayuda al proyecto Debian (que GoldenDog apoya al 100%) informando anónimamente qué paquetes son los más utilizados. Puedes seleccionar "No" si prefieres mantener tu privacidad.

### 7. Instalación de GRUB
GRUB es el cargador de arranque que permite que tu computadora inicie Linux. 
- El instalador detectará automáticamente dónde instalarlo (normalmente en el *Master Boot Record* / MBR). Selecciona la unidad sugerida para completar la instalación.

## Primer Inicio
Una vez finalizado, el sistema se reiniciará en GoldenDog. El primer inicio puede tardar unos segundos extra mientras el sistema realiza tareas de limpieza y post-instalación.

## Controladores de Video
- **Intel / AMD**: GoldenDog intentará instalar automáticamente los controladores correctos por ti.
- **NVIDIA**: Si tienes una tarjeta NVIDIA, consulta nuestra **[Guía de Controladores NVIDIA](./nvidia-drivers.md)** para las instrucciones de instalación.
