---
sidebar_position: 4
---

# NVIDIA Driver Installation

Unlike AMD or Intel, NVIDIA does not open-source its drivers to the Linux kernel or distributions. As a result, NVIDIA drivers are always proprietary, regardless of which distribution you use.

## Why Use Repository Packages?

The binary provided by NVIDIA on their official website is essentially the same as the one found in the Debian/GoldenDog `nvidia-driver` package. However, installing it through the official repositories offers a massive advantage: **Stability during updates.**

Furthermore, the official package ensures seamless integration with the core system components, including:
- **DKMS**: Automatically rebuilds modules for new kernels.
- **APT**: Manages dependencies and security updates.
- **Secure Boot**: Handles signing requirements.
- **Initramfs**: Ensures the driver is correctly loaded at the earliest boot stage.

### The "Manual Install" Trap
If you install the driver manually using a `.run` file from NVIDIA's website:
1. The driver compiles a kernel module specifically for your **current** kernel version.
2. When GoldenDog/Debian updates the kernel, that module becomes invalid.
3. Your system may fail to boot into a graphical session until you manually recompile the driver.

By using the repository package, the system uses **DKMS** to automatically recompile the driver module every time a new kernel is installed.

:::danger DO NOT INSTALL MANUALLY
We strongly recommend **against** installing NVIDIA drivers using the `.run` files from NVIDIA's website. It is the leading cause of system breakage after updates.
:::

## Installation Guide

### Option 1: The Latest Features (Backports)
For users who want the best performance, the latest driver features, and better support for **Wayland**, we recommend using the backports repository. This ensures you have both the latest kernel and the latest compatible driver.

```bash
sudo apt update
sudo apt -t trixie-backports install nvidia-driver linux-image-amd64 linux-headers-amd64 -y
```

### Option 2: The Stable Version
If you prefer to stay on the standard stable version (fully tested and updated alongside your current kernel), run:

```bash
sudo apt update
sudo apt install nvidia-driver
```

## Post-Installation
After the installation completes, restart your computer to load the new drivers.

```bash
sudo reboot
```
