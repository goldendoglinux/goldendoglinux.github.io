---
sidebar_position: 4
---

# Instalando GoldenDog en una Macbook

Esta guía está dirigida a las Macbooks Intel.

El proceso de instalación es similar a la instalación de GoldenDog en cualquier máquina Intel/AMD. Después de la instalación, algunos usuarios informan que los altavoces de la Macbook no producen sonido.

## Solución para el Audio

Una solución para que el audio funcione en GoldenDog instalado en hardware Intel de Apple Macbook es la siguiente:

1. Abra la terminal y escriba:
   ```bash
   sudo apt update
   sudo apt install linux-headers-amd64 # instala el metapaquete goldendog/trixie para las cabeceras de linux
   sudo apt install dkms # instala dkms
   ```

2. Clone el repositorio del controlador de audio:
   ```bash
   git clone https://github.com/leifliddy/macbook12-audio-driver
   cd macbook12-audio-driver
   ```

3. Obtenga el número del kernel:
   ```bash
   uname -r
   ```

4. Si el kernel es `6.12.57`, ejecute el script de instalación:
   ```bash
   sudo bash install.cirrus.driver.sh -k 6.12.57
   ```
   *(Nota: Reemplace `6.12.57` con su versión real del kernel obtenida en el paso anterior.)*

5. Finalmente, reinicie su máquina para que los cambios surtan efecto:
   ```bash
   sudo reboot
   ```

El nuevo controlador debería compilarse y el audio debería reproducirse con normalidad después del reinicio.

## Verificación

Para verificar que el controlador esté cargado:
```bash
sudo lsmod | grep -ia cirrus
```
