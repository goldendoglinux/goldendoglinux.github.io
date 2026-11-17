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

On some systems (especially Turing GPUs such as the RTX 2080 Ti), also install matching headers and non-free firmware so DKMS can build cleanly:

```bash
sudo apt install -y linux-headers-$(uname -r) firmware-misc-nonfree
```

## If NVIDIA Is Not Loading at All

On some NVIDIA GPUs the open-source `nouveau` driver never brings up a usable display. The proprietary driver is not loaded yet, so you get a black screen or a frozen early boot — with no desktop to click through.

Until the repository driver is installed, recover by **typing a temporary GRUB edit at every boot**:

1. At the GRUB menu, highlight your GoldenDog kernel entry and press `e`.
2. On the `linux` line, remove `quiet` (optional, so you can see errors) and add `nomodeset`.
3. Boot with `Ctrl + X`.
4. Switch to a text console with `Ctrl + Alt + F3`, log in, and install the repository driver (Option 1 or 2 above).
5. After install, make sure `nomodeset` is **not** left in `/etc/default/grub`, then run:

```bash
sudo update-grub
sudo reboot
```

`nomodeset` is only a typed workaround so you can reach a TTY. Once `nvidia-driver` is installed, clear it so `nvidia-drm` can load normally.

### Verify

```bash
nvidia-smi
```

You should see the proprietary driver version (for example `550.x`) and your GPU listed.

## Post-Installation
After the installation completes, restart your computer to load the new drivers.

```bash
sudo reboot
```
