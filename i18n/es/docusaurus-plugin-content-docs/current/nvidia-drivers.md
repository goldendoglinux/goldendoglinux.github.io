---
sidebar_position: 4
---

# Instalación de Controladores NVIDIA

A diferencia de AMD o Intel, NVIDIA no abre su código ni al kernel de Linux ni a ninguna distribución. Por lo tanto, el controlador de NVIDIA es siempre **privativo**, sin importar la distribución que utilices.

## ¿Por qué usar los paquetes del repositorio?

El binario que se descarga de la página oficial de NVIDIA es esencialmente el mismo que se ofrece en el paquete `nvidia-driver` de Debian/GoldenDog. Sin embargo, instalarlo desde los repositorios oficiales ofrece una ventaja crucial: **Estabilidad durante las actualizaciones.**

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
sudo apt -t trixie-backports install nvidia-driver linux-image-amd64 linux-headers-amd64 -y
```

### Opción 2: Versión Stable
Si prefieres mantenerte en la versión estable estándar (probada y actualizada siempre junto con tu kernel actual), ejecuta:

```bash
sudo apt install nvidia-driver
```

## Post-Instalación
Una vez finalizada la instalación, reinicia tu computadora para cargar los nuevos controladores.

```bash
sudo reboot
```
