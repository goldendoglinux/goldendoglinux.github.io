---
sidebar_position: 4
---

# Instalación de Controladores NVIDIA

A diferencia de AMD o Intel, NVIDIA no abre su código ni al kernel de Linux ni a ninguna distribución. Por lo tanto, el driver de NVIDIA es siempre **privativo**, sin importar la distribución que utilice.

A partir de GoldenDog 2.2.1, la forma más sencilla de instalarlo es la **Configuración de GPU NVIDIA de GoldenDog**, una aplicación que instala y mantiene el driver por usted, sin usar la terminal.

:::caution En fase de pruebas
La Configuración de GPU NVIDIA de GoldenDog se encuentra en fase de pruebas. Si encuentra un problema, puede reportarlo desde el enlace que figura en la misma aplicación o en [github.com/goldendoglinux/support/issues](https://github.com/goldendoglinux/support/issues).
:::

## Configuración de GPU NVIDIA de GoldenDog

### Abrir la aplicación

- **Desde GoldenDog Welcome:** si su equipo tiene una placa NVIDIA, la bienvenida muestra una pantalla con el modelo detectado y ofrece instalar el driver.
- **Desde el menú de aplicaciones:** busque **Configuración de GPU NVIDIA de GoldenDog** en la categoría *Configuración*.

Al abrirse, la aplicación detecta la placa de video y muestra el driver que se está utilizando. Si el equipo no tiene una placa NVIDIA, le indica que no necesita ningún driver.

### Elegir un driver

La aplicación muestra solo los drivers compatibles con su placa:

| Driver | Qué ofrece |
|---|---|
| **Driver de Debian** (versión 550) | Lo prueba Debian y se actualiza junto con el resto del sistema. Es la opción más conservadora. |
| **Driver de NVIDIA** (versiones más modernas) | Proviene del repositorio oficial de NVIDIA. Ofrece mejor rendimiento en Wayland y en juegos recientes, y es la única opción para las placas más nuevas (RTX 50). |

Si elige el driver de NVIDIA, también elige una **rama** (por ejemplo, 615). Use la que figura como *recomendada*, salvo que necesite otra. La rama elegida queda fija hasta que usted la cambie, por lo que una actualización nunca salta a otra rama por su cuenta.

Qué driver puede usar su placa depende de su generación:

| Placa | Driver de Debian | Driver de NVIDIA |
|---|---|---|
| Serie GTX 16, serie RTX 20 y posteriores | Sí | Sí |
| Placas más nuevas que el driver de Debian (por ejemplo, RTX 50) | No | Sí |
| Series GTX 900 y 1000, Titan V | Sí | No |
| Placas más antiguas (Kepler y anteriores) | No | No: se utiliza el driver libre **nouveau** |

### Revisar los cambios

Al hacer clic en **Continuar**, la aplicación calcula qué va a cambiar y se lo muestra antes de tocar nada:

- **Paquetes nuevos**, que se van a instalar.
- **Paquetes que cambian de versión.**
- **Paquetes que se quitan.**

Al hacer clic en **Instalar**, el sistema le solicita su contraseña de administrador. Antes de cambiar nada, el driver se **compila de prueba para cada kernel instalado**. Si no compila para alguno de ellos, no se cambia nada y la aplicación muestra los detalles. La instalación descarga varios cientos de MB y puede tardar algunos minutos; una barra de progreso muestra cada paso, incluida la compilación para cada kernel. No apague el equipo mientras tanto.

### Secure Boot

Si su equipo tiene Secure Boot activado, el driver se firma con una clave de este equipo, y esa clave se debe registrar una única vez:

1. Antes de instalar, la aplicación le pide que elija una **contraseña de un solo uso**. Escríbala dos veces.
2. Cuando termine la instalación, reinicie el equipo.
3. Durante el arranque aparece una pantalla azul: **MOK Manager**. Elija **Enroll MOK**, luego **Continue** y luego **Yes**.
4. Escriba la contraseña que eligió y reinicie.

:::warning No omita la pantalla azul
Si deja pasar el tiempo de MOK Manager sin registrar la clave, el equipo arranca sin el driver de NVIDIA. Puede volver a abrir la Configuración de GPU NVIDIA de GoldenDog para repetir el proceso.
:::

### Después de instalar

Reinicie el equipo para empezar a usar el driver. Si vuelve a abrir la aplicación, verá la versión instalada y si el driver está en uso.

La aplicación también le avisa si encuentra problemas, por ejemplo un kernel que no tiene el driver de NVIDIA o archivos del driver que faltan. En esos casos, el botón **Reparar instalación** lo soluciona.

### Cambiar de driver o volver atrás

Puede cambiar a otra rama, o volver del driver de NVIDIA al de Debian, en cualquier momento: abra la aplicación, elija la nueva opción y siga los mismos pasos.

### Si no tiene una placa NVIDIA

La actualización a GoldenDog 2.2.1 instala la Configuración de GPU NVIDIA de GoldenDog como paquete recomendado. No ejecuta nada en segundo plano: no tiene servicios ni se inicia sola. Si su equipo no tiene una placa NVIDIA, puede quitarla sin afectar al resto del sistema:

```bash
sudo apt remove goldendog-nvidia-setup-gui goldendog-nvidia-setup
```

Una vez quitada, no se vuelve a instalar en las próximas actualizaciones.

## Desde la terminal

La misma herramienta se puede usar desde una terminal:

```bash
goldendog-nvidia-setup status                          # Placa, driver instalado y avisos
goldendog-nvidia-setup branches                        # Ramas disponibles de NVIDIA
sudo goldendog-nvidia-setup install                    # Driver de Debian
sudo goldendog-nvidia-setup install --source nvidia    # Driver de NVIDIA, rama recomendada
sudo goldendog-nvidia-setup install --branch 615       # Driver de NVIDIA, una rama en particular
sudo goldendog-nvidia-setup install --source debian    # Volver al driver de Debian
```

Para ver qué cambiaría sin modificar nada, agregue `--dry-run` (en ese caso no se necesitan privilegios de administrador).

## ¿Por qué no usar el instalador de NVIDIA?

Si instala el driver manualmente con un archivo `.run` descargado del sitio de NVIDIA:

1. El driver compila un módulo del kernel solo para la versión del kernel **actual**.
2. Cuando GoldenDog actualiza el kernel, ese módulo deja de funcionar.
3. Es posible que el sistema no logre iniciar la sesión gráfica hasta que vuelva a compilar el driver a mano.

Los paquetes que instala la Configuración de GPU NVIDIA de GoldenDog, ya sea de Debian o del repositorio de NVIDIA, utilizan **DKMS** para volver a compilar el driver automáticamente cada vez que se instala un kernel nuevo, y se actualizan por `apt` junto con el resto del sistema.

:::danger NO INSTALE MANUALMENTE
Recomendamos enfáticamente **no** instalar los drivers de NVIDIA con los archivos `.run` del sitio de NVIDIA. Es la principal causa de roturas del sistema después de una actualización.
:::
