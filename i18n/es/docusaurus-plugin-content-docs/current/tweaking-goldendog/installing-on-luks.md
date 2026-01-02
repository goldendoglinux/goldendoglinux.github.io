---
sidebar_position: 5
---

# Instalar GoldenDog en una partición LUKS cifrada

Esta guía proporciona un paso a paso para instalar GoldenDog en una partición cifrada con LUKS ya existente. Este es un proceso manual que requiere el uso de la terminal durante la instalación.

> [!WARNING]
> Este proceso implica el particionamiento manual del disco y comandos de terminal. No hay garantías; proceda bajo su propia responsabilidad. Asegúrese de tener una copia de seguridad de sus datos.

## Particionado Manual

El instalador de Debian puede no detectar las particiones cifradas automáticamente. Siga estos pasos para preparar el disco:

1. En la pantalla de **Particionado de discos**, elija **Manual**.
2. Seleccione la partición cifrada (por ejemplo, `/dev/sda6`) o cualquier otra que pretenda usar.
3. Presione **Enter** y donde dice **Utilizar como:**, elija la opción **volumen físico para cifrado**. Esto hará que se carguen los módulos y programas necesarios.
4. Vuelva a entrar en **Utilizar como:** y elija **no usar partición**, luego salga con **Se ha terminado de definir la partición**.

## Abrir el Volumen Cifrado

1. Abra una consola con `Ctrl+Alt+F2`.
2. Use la siguiente orden para cerrar/resetear el estado si es necesario (según el reporte del contribuidor):
   ```bash
   cryptsetup luksClose /dev/sda6
   ```
   *(Nota: Sustituya `sda6` por la partición que corresponda en cada caso).*

3. Vuelva al instalador con `Ctrl+Alt+F5` (o `F1/F7` dependiendo del sistema).
4. Haga clic en el botón **Retroceder**.

## Configurar los Volúmenes

1. Seleccione **Detectar discos** y presione **Continuar**. Esto hará que veamos el volumen cifrado.
2. Configure las particiones para `/` y la de intercambio (`swap`) como desee, pero **sin tocar la partición cifrada** `/dev/sda6` directamente todavía.
3. Una vez definidas las particiones `/` y de intercambio, seleccione la partición dentro del volumen cifrado, y en **Utilizar como:** elija **volumen físico para cifrado**.
4. **MUY IMPORTANTE:** En donde dice **Borrar los datos**, seleccione **NO**.
5. Termine seleccionando **Se ha terminado de definir la partición**.
6. Elija **Terminar el particionado y escribir los cambios en el disco**. Asegúrese de que la partición cifrada no esté marcada para formatearse.

## Configuración Final del Sistema

Antes de que finalice la instalación, debemos asegurarnos de que el sistema sepa cómo montar el volumen cifrado.

1. Cambie a una consola con `Ctrl+Alt+F2`.
2. Ejecute la siguiente orden para obtener el UUID de la partición cifrada:
   ```bash
   cryptsetup luksUUID /dev/sda6
   ```
   *Anote este UUID.*

3. Edite el `fstab` del sistema a instalar:
   ```bash
   nano /target/etc/fstab
   ```
   Agregue la línea (ajustando el punto de montaje, por ejemplo, `/home`):
   ```text
   /dev/mapper/home-cifrado /home ext4 defaults 0 2
   ```

4. Edite el archivo `crypttab` del sistema que se está instalando:
   ```bash
   nano /target/etc/crypttab
   ```
   Agregue la siguiente línea:
   ```text
   home-cifrado UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx none luks
   ```
   *Sustituya `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` por el UUID que obtuvo antes.*

5. Vuelva al instalador, finalice la instalación y elija dónde instalar el cargador de arranque.
6. Reinicie el sistema. Se le solicitará la contraseña para montar el volumen cifrado en el inicio.

_Documento escrito por noname de la comunidad Debian Argentina_