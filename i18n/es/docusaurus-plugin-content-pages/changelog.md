# Registro de Cambios

Todos los cambios notables en el proyecto GoldenDog Linux se documentarán en este archivo.
 
## [2.0.8] "Golden Retriever" - 2026-01-11

### Cambiado
- **Repositorio**: Se reestructuró el repositorio para coincidir con el codename (`goldenretriever`), facilitando futuras actualizaciones del sistema a GoldenDog 3.
- **Paquetes**: Se añadieron nuevamente todos los paquetes a la nueva estructura del repositorio.
- **Sistema**: Se corrigió `goldendog.sources` en `/etc/apt/apt.sources.d/` para apuntar a la versión actual.

### Añadido
- **Paquetes**: Se creó el metapaquete `goldendoglinux` (v2.0.0), que permitirá la migración completa del sistema a GoldenDog 3 sin necesidad de reinstalar.
- **Instalación**: Se preinstaló el metapaquete `goldendoglinux` en el build actual (2.0.8).

### Nota

> El metapaquete `goldendoglinux` permitirá la entrega en vivo de actualizaciones de seguridad, correcciones de errores y tambien la migración y actualización total del sistema hacia futuras versiones.
>
> ¡Esta es la última actualización de la fase pre-alpha, estamos un paso más cerca del lanzamiento público!
>
> -- Alexia

## [2.0.7] "Golden Retriever" - 2026-01-11

### Añadido
- **Instalador**: Se añadió el modo oscuro al instalador de texto para todos los initrds UEFI, BIOS y XEN.
- **Paquetes**: Paquetes base actualizados a Debian Trixie 13.3.
- **Paquetes**: Se añadió el paquete `nano` 8.7 (última versión) al repositorio oficial de GoldenDog.
- **Plasma**: Se añadió el tema dark-plasma para Plasma 6 (corrigiendo el tamaño del icono del menú de inicio).
- **Software**: Se añadió soporte para Flatpak, repositorio Flathub y el plugin de Flatpak para Discover.

### Eliminado
- **Instalador**: Se eliminó `tzsetup.udeb` ya que ha sido parcheado upstream en Debian.
- **Plasma**: Se eliminó el antiguo tema dark-plasma (Plasma 5) por estar obsoleto.

## [2.0.6] "Golden Retriever" - 2026-01-10

### Añadido
- **Instalador**: Ahora muestra la versión de GoldenDog en la esquina inferior derecha para ayudar a los testers a confirmar que están instalando la versión correcta (evitando problemas de ISOs cacheadas en máquinas virtuales).
- **Fuentes**: Se añadió `fontconfig/fonts.conf` para permitir una forma mucho más limpia de configurar las fuentes del sistema.
- **Barra de tareas**: Se añadió el icono de Firefox a la barra de estado de Plasma, reemplazando a Konqueror.

### Cambiado
- **Fuentes**: Plasma ahora usa por defecto el conjunto de fuentes de Ubuntu (licencia Canonical).
- **Identidad**: Se reemplazó el logo de GoldenDog en la pantalla de inicio de sesión de GDM por el logo tradicional que coincide con el estilo del instalador.
- **Menú de Inicio**: El menú de inicio de Plasma ahora muestra las aplicaciones al pasar el ratón por la categoría de la izquierda de forma predeterminada.
- **Navegador**: Se eliminó el navegador Konqueror; se reemplazó el navegador predeterminado por Firefox ESR.

### Eliminado
- **Fondo de pantalla**: Se eliminó el splash de GoldenDog de la sección de fondos de pantalla por estar obsoleto, reduciendo el espacio en disco.

### Nota

> La mayoría de estos cambios no son correcciones de errores sino mejoras en la interfaz. Muchos formaban parte de la hoja de ruta alpha, lo que significa que estamos muy cerca del lanzamiento público. ¡Siiii!
>
> -- Alexia

## [2.0.5] "Golden Retriever" - 2026-01-08

### Añadido
- **Repositorio**: Se añadió el repositorio oficial de `goldendoglinux` (`deb.goldendoglinux.org`) y su respectiva clave firmada.
- **Herramientas**: Se añadió el paquete .deb de `neofetch-c` al nuevo repositorio (una versión moderna de neofetch escrita en C por Alexia - [GitHub](https://github.com/alexiarstein/neofetch-c)).

### Eliminado
- **Herramientas**: Se eliminó el antiguo script bash de `neofetch` por estar obsoleto. El comando 'neofetch' ahora es reemplazado por la nueva herramienta (hay que instalarla con ```sudo apt update && sudo apt install neofetch-c```)

### Nota

> ¡Estamos muy cerca de entrar en estado alpha! El core del sistema está casi totalmente funcional.
>
> En el estado alpha, la hoja de ruta se centrará en la selección de paquetes que vendrán preinstalados, embellecer aún más la interfaz de Plasma y mejorar diversas funciones relacionadas con la experiencia del usuario.
>
> ¡Que tengan un feliz verano! (o invierno si están en el hemisferio norte)
> -- Alexia

## [2.0.4] "Golden Retriever" - 2026-01-04

### Añadido
- **Pantalla de Bienvenida**: Nueva pantalla de bienvenida de Goldendog que integra el EULA, el Debian Popularity Contest y la Telemetría de Plasma en un único diálogo de control. `goldendog-welcome` es un paquete independiente y de código abierto.
- **Localización**: Añadido soporte para 8 idiomas en la pantalla de bienvenida de Goldendog.
- **Política**: Nueva regla de política que permite a los usuarios activos habilitar/deshabilitar la telemetría de Debian sin elevar permisos.
- **Fuentes**: Añadido paquete de fuentes de Ubuntu (con licencia).
- **Instalador**: Añadido el repositorio `non-free` al instalador.

### Eliminado
- **Plasma Welcome**: Deshabilitada y eliminada la pantalla de bienvenida predeterminada de Plasma de todos los runlevels.
- **EULA**: Eliminado el antiguo diálogo de EULA independiente.

### Corregido
- **Instalador**: Corregido el menú GRUB para instalaciones UEFI.

## [2.0.3] "Golden Retriever" - 2026-01-02

### Añadido
- **GRUB**: Tiempo de espera de 15 segundos con cuenta regresiva visible.
- **Escritorio**: Icono de papelera con localización automática según el idioma de instalación.
- **Iconos**: Pack de iconos experimentales de GoldenDog (disponible en Preferencias de Plasma > Iconos > Goldendog2).
- **Construcción de ISO**: Rendimiento optimizado durante el build (goldendog-builder) mediante el uso de hardlinks para reducir duplicados, disminuyendo considerablemente el tamaño de la ISO a un promedio de **820MB**.


### Corregido
- **Instalador**: Se eliminó el logo duplicado en el menú de arranque UEFI.
- **Instalador**: El logo de GoldenDog ahora está perfectamente centrado durante la inicialización.
- **Localización**: Los directorios del sistema y carpetas de Plasma ahora muestran correctamente sus nombres locales en idiomas distintos al inglés.
- **Sistema**: Sanitización y limpieza completa de SDDM en todos los niveles de ejecución.

### Nota
- **Sitio Web**: Se corrigió la visibilidad del menú móvil en modo oscuro.
- **Documentación**: Se han actualizado las guías de instalación y uso. Se agregó documentación para instalar GoldenDog en un sistema con un disco LUKS en la sección _Tweaking GoldenDog_

## [2.0.2] "Golden Retriever" - 2025-12-31

### Añadido
- **Escritorio**: Se añadió un enlace a la papelera en el escritorio.
- **Identidad**: Se añadieron los archivos `/etc/issue` e `/etc/issue.net` para reflejar GoldenDog Linux (branding).

### Cambiado
- **Instalación**: Se saneó el proceso de creación de directorios después de la instalación.
- **Sistema**: Se limpiaron las antiguas referencias a Calamares del icono de la terminal.

### Corregido
- **Localización**: Se corrigieron los problemas de localización en KDE Plasma.

## [2.0.1] "Golden Retriever" - 2025-12-27

### Añadido
- **Cockpit**: Se incluye Cockpit, la herramienta web de administración. Para acceder, abra Firefox y vaya a la URL `localhost:9090`, luego inicie sesión con su usuario y contraseña del sistema.
- **Soporte de Fastfetch**: ¡Los desarrolladores de `fastfetch` han añadido soporte oficial para GoldenDog! Al instalar `fastfetch`, ahora se mostrará el logo de GoldenDog Linux.
- **Rebranding de Logos**: Logos actualizados para pixmaps, logo por defecto y de seguridad.

### Cambiado
- **Menú GRUB UEFI**: Se corrigió el menú GRUB para instalaciones UEFI para mostrar las opciones "Install GoldenDog (Graphical)" e "Install GoldenDog (Text)", siguiendo el mismo estilo que el menú de instalación BIOS.

### Nota
- **Refactorización del Sitio**: Mejoras continuas en la plataforma Docusaurus.
- **Nuevos Artículos**: Se han añadido guías completas para:
  - [Crear Medios de Instalación](/docs/installation-guide)
  - [Guía de Instalación](/docs/installing-goldendog)
  - [Aplicaciones Populares](/docs/popular-apps)
  - [Instalación de Controladores NVIDIA](/docs/nvidia-drivers)

## [2.0.0] "Golden Retriever" - 2025-12-26

### Añadido
- **Base Debian Trixie**: Refactorización completa del proyecto, ahora basado en una base mínima de Debian Trixie.
- **Plasma 6**: El último entorno de escritorio KDE Plasma para una experiencia moderna.
- **Wayland por Defecto**: Wayland es ahora la sesión predeterminada, con X11 aún disponible como sesión opcional.
- **Instalador Mejorado**: Nuevo soporte para configuración de Proxy y detección automática de tarjetas WiFi durante la instalación.
- **Soporte UEFI Completo**: Compatibilidad integral para máquinas UEFI modernas.
- **Repositorios Modernos**: Sigue el nuevo formato de repositorio DEB822 en `/etc/apt/apt.sources.d/debian.sources`.
- **Backports**: Habilitados por defecto para el acceso a paquetes más recientes.

### Cambiado
- **Optimización de ISO**: Reducción drástica del tamaño de la imagen de 7GB a **menos de 1GB**.
- **Motor de Instalación**: Calamares reemplazado por el robusto instalador de Debian.
- **Conjunto de Herramientas Principal**: Lista de software preinstalado refinada.

### Nota
> ¡Feliz Navidad y próspero Año Nuevo! — Alexia
