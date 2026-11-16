---
title: Seguridad
description: Recomendaciones y buenas prácticas para mantener tu sistema GoldenDog Linux limpio y seguro.
---

# Cómo mantener GoldenDog seguro

Goldendog es un Sistema Operativo **Profesional** y viene con una gran variedad de  ajustes de seguridad razonables de fábrica: actualizaciones de seguridad de Debian activadas, soporte para Secure Boot, SSH y kernel endurecidos, y el firewall habilitado por defecto. Pero ningún ajuste por defecto reemplaza los buenos hábitos. En esta página hemos reunido las prácticas recomendables para que tu sistema se mantenga limpio y seguro con el transcurso del tiempo.

:::tip Lista rápida

- Actualizá el sistema al menos una vez por semana.
- Mantené **GoldenDog Firewall** activado y revisá sus reglas.
- Corré `sudo linaudit` cada tanto y arreglá lo que te marque.
- Instalá software solo de fuentes confiables.
- Usá una contraseña fuerte, bloqueá la pantalla y hacé copias de seguridad.

:::

## El Centro de seguridad

GoldenDog incluye el **Centro de seguridad**, que reúne en un solo lugar los ajustes más importantes. Abrilo desde el menú de aplicaciones para:

- activar o desactivar el **firewall** y elegir sus políticas predeterminadas;
- activar o desactivar el **acceso remoto** (servidor SSH y consola web Cockpit);
- habilitar las **actualizaciones de seguridad automáticas**;
- ajustar las opciones de **privacidad**;
- auditar tu equipo con **linaudit**.

## 1. Mantené el sistema actualizado

La mayoría de los ataques aprovechan vulnerabilidades que ya fueron corregidas. Actualizar seguido es lo más importante que podés hacer.

GoldenDog cuenta con el repositorio de seguridad dedicada de Debian además del suyo propio. Para actualizar todo desde una terminal:

```bash
sudo apt update && sudo apt full-upgrade
```

También se puede actualizar el sistema desde **Discover** o desde la [Consola Web](/docs/tweaking-goldendog/web-console), que muestra las actualizaciones de seguridad separadas del resto para que se puedan aplicar primero.

### Actualizaciones de seguridad automáticas

Si preferís no depender de acordarte, el Centro de seguridad puede instalar los parches de seguridad por su cuenta, en segundo plano, apenas estén disponibles. Abrí el **Centro de seguridad** y, en **Actualizaciones de Seguridad (Recomendado)**, activá **Instalar actualizaciones de seguridad automáticamente**. Esta opción viene **desactivada**: la decisión es tuya. El equipo nunca se reinicia por su cuenta, así que acordate de reiniciar después de las actualizaciones del kernel.

Pero ademas de los repos oficiales, el sistema puede tener otras fuentes, como por ejemplo, flatpak:

```bash
flatpak update            # aplicaciones Flatpak (Flathub)
fwupdmgr refresh && fwupdmgr update   # firmware (BIOS/UEFI, SSD, docks, etc.)
```

:::note Reiniciá después de actualizar el kernel
Cuando una actualización instala un nuevo kernel o bibliotecas core del sistema, el arreglo no se aplica hasta que no se reinicia el equipo. Recomendamos no postergar las actualizaciones y los reinicios.
:::

Para enterarte de los parches importantes, suscribite al boletín de **Actualizaciones de Seguridad** en la sección [Comunidad](/community). También podés seguir los [avisos de seguridad de Debian](https://www.debian.org/security/).

## 2. Activá el firewall y revisalo

GoldenDog viene con el firewall **activado desde el primer arranque**: bloquea las conexiones entrantes y permite las salientes. Podés ver su estado en el **Centro de seguridad** y administrar reglas específicas con **GoldenDog Firewall**, una interfaz sencilla para UFW (abrilo desde el menú de aplicaciones o corré `goldendog-firewall`). La guía completa está en la [documentación de GoldenDog Firewall](/docs/firewall).

Configuración recomendada para una computadora de escritorio o notebook:

- **Entrante: Denegar.** Nadie puede conectarse a tu máquina salvo que lo permitas con una regla.
- **Saliente: Permitir.** Tus aplicaciones navegan y descargan con normalidad.
- **Abrir solo los puertos que realmente se necesitan** y borrar las reglas que ya no se necesiten.
- Si necesitás abrir un puerto solo para tu red de casa (por ejemplo, la Consola Web en el puerto `9090`), usá la pestaña **Avanzado** y limitá el origen (**Desde**) a tu red local, por ejemplo `192.168.1.0/24`, en vez de abrirlo para todo el mundo.

Revisá tus reglas cada tanto, sobre todo después de probar programas o servidores nuevos. También podés ver el estado desde una terminal:

```bash
sudo ufw status verbose
```

### Aplicaciones que necesitan recibir conexiones

Como las conexiones entrantes están bloqueadas, las aplicaciones que esperan que **otros dispositivos se conecten a tu equipo** no van a funcionar hasta que lo permitas. Algunos ejemplos habituales:

| Aplicación | Para qué sirve | Puertos a permitir |
|---|---|---|
| **LocalSend** | Compartir archivos con el celular y otras computadoras | `53317` TCP y UDP |
| **KDE Connect** | Conectar el celular con el escritorio | `1714:1764` TCP y UDP |
| **UxPlay** | Recibir AirPlay desde un iPhone, iPad o Mac | Ejecutado como `uxplay -p`: `7000`, `7001`, `7100` TCP y `6000`, `6001`, `7011` UDP |

Si una aplicación no encuentra tu equipo, o los otros dispositivos no logran llegar a él, lo primero que conviene revisar es el firewall. La solución recomendada es **agregar una regla** en GoldenDog Firewall que permita solo los puertos que la aplicación necesita, limitada a tu red local siempre que sea posible. También podés desactivar el firewall mientras usás la aplicación, pero acordate de **volver a activarlo** después, y nunca lo hagas en una red pública.

:::caution Redes públicas
En el Wi-Fi público (aeropuertos, bares, hoteles) el firewall es fundamental. Asegurate de que esté activo antes de conectarte.
:::

## 3. Auditá tu sistema con linaudit

GoldenDog incluye [`linaudit`](https://lexiworks.dev/linaudit), una auditoría de seguridad **de solo lectura**: mira tu máquina como lo haría un atacante o un auditor, te da un puntaje de 1 (peor) a 10 (mejor) y te dice en palabras simples qué está mal, qué tan grave es y cómo arreglarlo. Nunca cambia nada de tu sistema.

Abrí una terminal (Konsole) y corré:

```bash
sudo linaudit
```

La primera vez te pregunta en qué idioma lo querés y qué tipo de máquina es. Para una computadora personal, elegí el perfil **escritorio**. Al terminar vas a ver tres pestañas: **Resumen**, **Hallazgos** (cada problema con su arreglo, que podés copiar con `y`) y **Categorías**. Con `?` ves los atajos y con `q` salís.

Algunas opciones útiles:

```bash
sudo linaudit --fast     # saltea los barridos completos del disco: segundos en vez de minutos
sudo linaudit --plain    # reporte de texto en vez de la interfaz interactiva
```

Para que la auditoría corra sola una vez por semana (el último reporte queda en `/var/lib/linaudit/latest.json`):

```bash
sudo systemctl enable --now linaudit.timer
```

Algunas cosas para tener en cuenta:

- **Correlo con `sudo`.** Sin root, muchos controles no se pueden evaluar y el puntaje queda limitado.
- Tomá los hallazgos como **cosas para revisar**, no como veredictos. Algunos controles son heurísticos y pueden dar falsos positivos.
- Si un hallazgo es una decisión tomada a conciencia, podés dejarlo documentado con el motivo en `/etc/linaudit/waivers.conf`.
- Los reportes describen los puntos débiles de tu máquina: **guardalos en privado** y no los pegues en foros públicos sin revisarlos antes.

## 4. Instalá software solo de fuentes confiables

- Preferí los **repositorios de Debian y de GoldenDog** (`apt`, Discover) y **Flathub** para las aplicaciones Flatpak.
- **No mezcles repositorios de otras distribuciones**, como los PPA de Ubuntu. Además de ser un riesgo de seguridad, es una de las formas más comunes de romper un sistema basado en Debian.
- Tené cuidado con los `.deb` sueltos y con comandos del estilo `curl ... | sudo bash`. Descargalos solo del sitio oficial del proyecto y, cuando puedas, leé el script antes de correrlo.
- **Nunca pegues en la terminal comandos que no entendés**, sobre todo si te los pasó un desconocido por un chat o un foro.
- Revisá los permisos de tus aplicaciones Flatpak con `flatpak info --show-permissions <app>` o con **Flatseal** (disponible en Flathub), y sacales el acceso a toda tu carpeta personal o a dispositivos a las que no lo necesiten.
- Desinstalá los programas que ya no usás. Menos software significa menos cosas para mantener actualizadas.

## 5. Cuidá tus cuentas y contraseñas

- Usá una **contraseña larga y única** para tu usuario. Una frase de varias palabras es más fácil de recordar y más difícil de adivinar.
- Usá un **gestor de contraseñas** (por ejemplo KeePassXC, que se instala con `sudo apt install keepassxc`) y activá la verificación en dos pasos en tus cuentas en línea.
- **Bloqueá la pantalla** cuando te alejás de la computadora (<kbd>Meta</kbd> + <kbd>L</kbd>) y configurala para que se bloquee sola después de unos minutos sin uso.
- Usá `sudo` solo cuando haga falta de verdad, y no trabajes con la sesión iniciada como `root`.
- Si la computadora la usan más personas, creá una cuenta para cada una y dales permisos de administrador solo a quienes realmente los necesiten.

## 6. Cifrá el disco y dejá Secure Boot activado

Si usás una notebook, el **cifrado de disco** protege tus datos si la perdés o te la roban. Mirá la guía para [instalar GoldenDog en una partición LUKS cifrada](/docs/tweaking-goldendog/installing-on-luks).

GoldenDog es compatible con **Secure Boot**. Si tu máquina lo tiene, dejalo activado: ayuda a evitar que se cargue código malicioso antes del sistema operativo.

## 7. Ojo con el acceso remoto

Los ajustes de SSH de GoldenDog ya vienen endurecidos (`root` no puede iniciar sesión por SSH, se quitaron los algoritmos débiles, y más). Aun así:

- El **servidor SSH** y la [Consola Web](/docs/tweaking-goldendog/web-console) (Cockpit) vienen **desactivados**. Si los necesitás, activalos desde el **Centro de seguridad**, en **Acceso remoto**. Al activar un servicio, también se abre su puerto en el firewall.
- Desactivalos cuando ya no los necesites: cada servicio que escucha en la red es una puerta más de entrada a tu equipo.
- Si usás SSH, preferí las **claves SSH** antes que las contraseñas.
- Cockpit da control total del sistema. No expongas el puerto `9090` a internet; si lo usás de forma remota, limitalo a tu red local.

## 8. Hacé copias de seguridad

Ninguna medida de seguridad es perfecta. Una buena copia de seguridad es lo que te permite recuperarte de una falla del disco, de un error o de un ransomware.

- Seguí la **regla 3-2-1**: tres copias de tus datos, en dos medios distintos, una de ellas fuera de tu casa (o en la nube, cifrada).
- Tené al menos una copia **desconectada** de la computadora, para que un problema en el sistema no pueda alcanzarla.
- Herramientas como **Timeshift** (instantáneas del sistema) o **Kup** (archivos personales) están disponibles en los repositorios.
- **Probá restaurar un archivo** cada tanto. Una copia que nunca restauraste es una copia que no sabés si funciona.

## 9. Navegá con sentido común

- Mantené el navegador actualizado e instalá solo las extensiones que realmente necesitás, desde su tienda oficial.
- Desconfiá de los correos o mensajes urgentes que te piden contraseñas, códigos o pagos. Ante la duda, escribí la dirección del sitio a mano en vez de seguir el enlace.
- Acordate de que Linux no es inmune al malware: la mayoría de las infecciones empiezan cuando alguien ejecuta algo que no debía.

## 10. Si instalás un kernel personalizado

Un kernel personalizado no recibe automáticamente los parches de seguridad de Debian: pasás a ser responsable de seguir los CVE y recompilar. Si solo necesitás un kernel más nuevo, preferí el kernel de **backports**. Más detalles en la [Guía de Kernel Personalizado](/docs/tweaking-goldendog/custom-kernel).

## ¿Encontraste un problema?

Si creés que encontraste un problema de seguridad en GoldenDog, o tenés dudas sobre estas recomendaciones, escribinos a través de [soporte](https://github.com/goldendoglinux/support/issues) o pasá por los canales de la [comunidad](/community).

La seguridad no es un producto que se instala una vez: es un hábito. ¡Si te gusta cuidar de tu GoldenDog compartilo! 🐶
