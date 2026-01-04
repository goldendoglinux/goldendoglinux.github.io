# Changelog

All notable changes to the GoldenDog Linux project will be documented in this file.
 
## [2.0.4] "Golden Retriever" - 2026-01-04

### Added
- **Welcome Screen**: New Goldendog welcome screen integrating EULA, Debian Popularity Contest, and Plasma Telemetry in a single control dialog. `goldendog-welcome` is an independent, open-sourced package.
- **Localization**: Added support for 8 languages in the Goldendog welcome screen.
- **Policy**: New policy rule allowing active users to enable/disable Debian telemetry without elevating permissions.
- **Fonts**: Added licensed Ubuntu fonts package.
- **Installer**: Added the `non-free` repository to the installer.

### Removed
- **Plasma Welcome**: Disabled and removed the default Plasma welcome screen from all runlevels.
- **EULA**: Removed the old standalone EULA dialog.

### Fixed
- **Installer**: Fixed the GRUB menu for UEFI installations.

## [2.0.3] "Golden Retriever" - 2026-01-02

### Added
- **GRUB**: 15 second timeout with a visible countdown.
- **Desktop**: Trash icon with automatic localization based on the installed language.
- **Icons**: Experimental GoldenDog icon pack (available in Plasma Settings > Icons > Goldendog2).
- **ISO Build**: Optimized performance during build using hardlinks to reduce duplicates, significantly reducing the ISO size to approximately **820MB**.

### Fixed
- **Installer**: Removed double logo in UEFI boot menu.
- **Installer**: Perfectly centered the GoldenDog logo during initialization.
- **Localization**: System directories and Plasma folders now correctly use local names for non-English languages.
- **System**: Complete sanitization and cleaning of SDDM across all runlevels.

### Note

- **Website**: Fixed mobile menu visibility in dark mode.
- **Documentation**: Added documentation for installing GoldenDog in a system with a LUKS encrypted disk in the _Tweaking GoldenDog_ section.

Happy New Year! — Alexia


## [2.0.2] "Golden Retriever" - 2025-12-31

### Added
- **Desktop**: Added a trash link to the desktop.
- **Branding**: Added `/etc/issue` and `/etc/issue.net` files to reflect GoldenDog Linux branding.

### Changed
- **Installation**: Sanitized directory creation process after installation.
- **System**: Cleaned up old references to Calamares from the terminal icon.

### Fixed
- **Localization**: Fixed localization issues in KDE Plasma.

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
