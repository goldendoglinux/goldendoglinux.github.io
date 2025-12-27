# Changelog

All notable changes to the GoldenDog Linux project will be documented in this file.

## [2.0.1] "Golden Retriever" - 2025-12-27

### Added
- **Cockpit**: Included the Cockpit web-based administration tool. To access it, open Firefox and go to `localhost:9090`, then login with your machine's user account and password.
- **Fastfetch Support**: The developers of `fastfetch` have added official support for GoldenDog Linux! Installing `fastfetch` will now correctly display the GoldenDog logo.
- **Logo Rebranding**: Refreshed logos for pixmaps, default, and security variants.

### Changed
- **GRUB UEFI Menu**: Corrected the UEFI GRUB menu options to match the BIOS installation menu style, showing "Install GoldenDog (Graphical)" and "Install GoldenDog (Text)".

### Note
- **Website Refactoring**: Continued improvements to the Docusaurus platform.
- **New Articles**: Added comprehensive guides for:
  - [Creating Installation Media](/docs/installation-guide)
  - [Installation Guide](/docs/installing-goldendog)
  - [Popular Applications](/docs/popular-apps)
  - [NVIDIA Driver Installation](/docs/nvidia-drivers)

## [2.0.0] "Golden Retriever" - 2025-12-26

### Added
- **Debian Trixie Base**: Complete refactoring of the project, now based on a minimal Debian Trixie foundation.
- **Plasma 6**: Latest KDE Plasma desktop environment for a modern experience.
- **Wayland by Default**: Wayland is now the default session, with X11 still available as an optional session.
- **Enhanced Installer**: New support for Proxy configuration and automatic WiFi card detection during installation.
- **Full UEFI Support**: Comprehensive compatibility for modern UEFI machines.
- **Modern Repositories**: Follows the new DEB822 repository format in `/etc/apt/apt.sources.d/debian.sources`.
- **Backports**: Enabled by default for access to newer packages.

### Changed
- **ISO Optimization**: Drastic reduction in image size from 7GB to **less than 1GB**.
- **Installation Engine**: Replaced Calamares with the robust Debian Installer.
- **Core Toolset**: Refined preinstalled software list:
  - *System*: `gdm3`, `sudo`, `rsync`, `locales`, `whiptail`.
  - *Dev Tools*: `gcc`, `make`, `build-essential`, `bison`, `flex`, `python3-venv`.
  - *Network*: `ssh`, `wget`, `curl`, `git`.
  - *UI/Base*: `firefox`, `python3-pyqt6`, `qt6-wayland`, `libxcb-cursor0`.

### Note
> Merry Christmas and Happy New Year! — Alexia
*   Initial release of the new site based on Docusaurus.
*   Complete refactor from Jekyll.
