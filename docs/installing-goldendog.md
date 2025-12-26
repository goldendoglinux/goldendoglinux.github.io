---
sidebar_position: 3
---

# Installing GoldenDog Linux

Installing GoldenDog is a straightforward process, whether you are installing it on a physical computer or a virtual machine.

## Before You Start

You can install GoldenDog on:
- **Physical Hardware**: See the [Media Creation Guide](./installation-guide.md) to prepare your USB drive.
- **Virtual Machines**: For a quick and easy test, you can use **[Alexia's Spin VM](https://github.com/alexiarstein/spin-vm)**. It creates an instant VM with a 20GB virtual disk, which is perfect for testing GoldenDog.

:::info Supported Architecture
GoldenDog Linux currently only supports **amd64** (64-bit Intel/AMD) architectures. It does not support Raspberry Pi or RISC-V. 
If you need those, check the [Debian Ports](https://wiki.debian.org/Ports/riscv64) or [Raspberry Pi images](https://raspi.debian.net/tested-images/).
:::

## Installation Steps

### 1. Language & Region
Selecting your language and region correctly is vital for your system's date, time, and locale settings.
- You can select a language different from your region (e.g., English language with Argentina region).
- If your country is not listed under your chosen language, select **"Other"** to find your specific location.

### 2. Network Configuration
The installer will scan for network devices.
- **Laptops**: The installer usually detects WiFi cards (often named `wlp*`).
- **WiFi Setup**: Select your wireless card, choose your network, and provide the password (usually **WPA/PSK**).

### 3. Hostname & Domain
- **Hostname**: This is the "name" of your machine on the network. The default is `goldendog`, but you can change it to anything you like.
- **Domain Name**: This is for identification within a network. If you're not sure, you can use any name or leave it at the default.

### 4. User & Root Accounts
You will be asked to set up two types of accounts:
- **Root Account**: The system administrator. It is highly recommended to choose a **different password** than your personal user account.
  - *Tip*: If you leave the root password blank, the root account will be disabled for direct login, but your user will be granted administrator rights via `sudo`.
- **User Account**: This will be your primary account. This first account created is automatically added to the `sudo` group.

### 5. Disk Partitioning
- **New Users**: Select **"Guided - use entire disk"** and **"All files in one partition"**. This is the safest and easiest option for laptops or testing.
- **Advanced Users**: Only use **LVM** (Logical Volume Manager) if you are deploying a server or have multiple hard drives and are familiar with how it works.

:::important
You must select **"Write changes to disk"** to commit the partitioning and proceed.
:::

### 6. System Configuration
- **Proxy Settings**: Most users should leave this field **blank**. Only enter information here if you are in a corporate or office environment that requires a proxy (e.g., `user:pass@proxy:port`).
- **Popularity Contest**: This helps the Debian project (which GoldenDog supports 100%) by anonymously reporting which packages are most used. You can safely select "No" if you prefer privacy.

### 7. Installing GRUB
GRUB is the bootloader that allows your computer to start Linux. 
- The installer will automatically detect where to install it (usually the Master Boot Record / MBR). Select the suggested drive to complete the installation.

## First Boot
Once finished, the system will reboot into GoldenDog. The first boot might take a few extra seconds as the system runs post-installation cleanup and sanitization tasks.

## Video Drivers
- **Intel / AMD**: GoldenDog will try to automatically install the correct drivers for you.
- **NVIDIA**: If you have an NVIDIA card, please refer to our **[NVIDIA Driver Guide](./nvidia-drivers.md)** for installation instructions.
