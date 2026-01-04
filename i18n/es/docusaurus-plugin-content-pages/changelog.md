# Registro de Cambios

Todos los cambios notables en el proyecto GoldenDog Linux se documentarán en este archivo.
 
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
