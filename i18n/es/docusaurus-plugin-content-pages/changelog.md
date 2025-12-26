# Registro de Cambios

Todos los cambios notables en el proyecto GoldenDog Linux se documentarán en este archivo.

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
