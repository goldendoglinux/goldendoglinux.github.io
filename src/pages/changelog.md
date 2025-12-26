# Changelog

All notable changes to the GoldenDog Linux project will be documented in this file.

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
