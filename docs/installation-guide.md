---
sidebar_position: 2
---

# Creating Installation Media

This guide will help you create a bootable USB drive to install GoldenDog Linux on your computer. You will need a USB drive with at least 4GB of capacity.

:::warning
Creating a bootable USB will **erase all data** currently on the drive. Please back up any important files before proceeding.
:::

## Windows (using Rufus)

[Rufus](https://rufus.ie/) is a small, reliable tool for creating bootable USB drives on Windows.

1.  Download and run the latest version of Rufus.
2.  Insert your USB drive.
3.  Click **SELECT** and choose the GoldenDog Linux ISO you downloaded.
4.  Leave other settings at their defaults (GPT/UEFI is recommended for modern machines).
5.  Click **START**.
6.  If prompted, select **Write in ISO Image mode**.

## macOS (using balenaEtcher)

[balenaEtcher](https://www.balena.io/etcher/) is the most straightforward tool for macOS users.

1.  Download and install balenaEtcher.
2.  Insert your USB drive.
3.  Click **Flash from file** and select the GoldenDog ISO.
4.  Click **Select target** and pick your USB drive.
5.  Click **Flash!** (you may need to enter your Mac password).

## Linux

On Linux, you have several options depending on your preference.

### 1. Using `dd` (Command Line)
The most universal method. Open your terminal and run:

:::warning
Creating a bootable USB will **erase all data** currently on the drive. Please back up any important files before proceeding.
:::

list your drives with `lsblk` or `fdisk -l` and select the correct drive.

```bash
# Replace /dev/sdX with your actual USB device path
sudo dd if=goldendog-2.0.0.iso of=/dev/sdX bs=4M status=progress && sync
```

:::danger
dd is a very powerful (and often destructive) tool. Be extremely careful with the `of=/dev/sdX` parameter. Selecting the wrong drive can result in permanent data loss on your system drives.
in the dd tool "if" is the input file (the iso) and "of" is the output file (the usb drive).
:::

### 2. Using balenaEtcher (GUI)
Just like on macOS, balenaEtcher works perfectly on Linux (available as an AppImage).

### 3. Using KDE ISO Image Writer
If you are already on a KDE system (like GoldenDog), you can use the **ISO Image Writer** available in the repositories.

1.  Install it via `sudo apt install isoimagewriter` if not already present.
2.  Open **ISO Image Writer**.
3.  Select the GoldenDog ISO and your USB drive.
4.  Click **Write**.
