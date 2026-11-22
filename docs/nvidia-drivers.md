---
sidebar_position: 4
---

# NVIDIA Driver Installation

Unlike AMD or Intel, NVIDIA does not open-source its drivers to the Linux kernel or distributions. As a result, the NVIDIA driver is always **proprietary**, regardless of which distribution you use.

Starting with GoldenDog 2.2.1, the easiest way to install it is **GoldenDog NVIDIA GPU Setup**, an application that installs and maintains the driver for you without using the terminal.

:::caution Testing
GoldenDog NVIDIA GPU Setup is still being tested. If you run into a problem, you can report it from the link in the application itself or at [github.com/goldendoglinux/support/issues](https://github.com/goldendoglinux/support/issues).
:::

## GoldenDog NVIDIA GPU Setup

### Opening the Application

- **From GoldenDog Welcome:** if your computer has an NVIDIA card, the welcome app shows a screen with the detected model and offers to install the driver.
- **From the application menu:** search for **GoldenDog NVIDIA GPU Setup** under *Settings*.

When it opens, the application detects your graphics card and shows the driver currently in use. If your computer does not have an NVIDIA card, it tells you that no driver is needed.

### Choosing a Driver

The application only shows the drivers that support your card:

| Driver | What it offers |
|---|---|
| **Debian's driver** (version 550) | Tested by Debian and updated together with the rest of the system. The most conservative choice. |
| **NVIDIA's driver** (newer versions) | From NVIDIA's official repository. Better performance on Wayland and in recent games, and the only option for the newest cards (RTX 50). |

If you choose NVIDIA's driver, you also choose a **branch** (for example, 615). Use the one marked as *recommended* unless you need another. The chosen branch stays pinned until you change it, so an update never jumps to a different branch on its own.

Which driver your card can use depends on its generation:

| Card | Debian's driver | NVIDIA's driver |
|---|---|---|
| GTX 16 series, RTX 20 series and newer | Yes | Yes |
| Cards newer than Debian's driver (for example, RTX 50) | No | Yes |
| GTX 900 and 1000 series, Titan V | Yes | No |
| Older cards (Kepler and earlier) | No | No: the free **nouveau** driver is used |

### Reviewing the Changes

After you click **Continue**, the application calculates what will change and shows you, before touching anything:

- **New packages**, which will be installed.
- **Packages that change version.**
- **Packages that are removed.**

When you click **Install**, the system asks for your administrator password. Before changing anything, the driver is **test-built for every installed kernel**. If the build fails for any of them, nothing is changed and the application shows the details. The installation downloads several hundred MB and may take a few minutes; a progress bar shows each step, including the build for each kernel. Do not turn off your computer while it is running.

### Secure Boot

If Secure Boot is enabled on your computer, the driver is signed with a key of this computer, and that key must be enrolled once:

1. Before installing, the application asks you to choose a **one-time password**. Type it twice.
2. When the installation finishes, restart your computer.
3. During startup, a blue screen appears: **MOK Manager**. Choose **Enroll MOK**, then **Continue**, then **Yes**.
4. Type the password you chose and restart.

:::warning Do not skip the blue screen
If you let MOK Manager time out without enrolling the key, the computer starts without the NVIDIA driver. You can open GoldenDog NVIDIA GPU Setup again to repeat the process.
:::

### After Installing

Restart your computer to start using the driver. When you open the application again, it shows the installed version and whether the driver is in use.

The application also warns you about problems it finds, for example a kernel that has no NVIDIA driver, or driver files that are missing. In those cases, the **Repair installation** button fixes it.

### Changing or Going Back

You can switch to another branch, or go back from NVIDIA's driver to Debian's, at any time: open the application, choose the new option and follow the same steps.

### If You Do Not Have an NVIDIA Card

The upgrade to GoldenDog 2.2.1 installs GoldenDog NVIDIA GPU Setup as a recommended package. It runs nothing in the background: it has no services and does not start on its own. If your computer does not have an NVIDIA card, you can remove it without affecting the rest of the system:

```bash
sudo apt remove goldendog-nvidia-setup-gui goldendog-nvidia-setup
```

Once removed, it is not installed again by future updates.

## From the Terminal

The same tool can be used from a terminal:

```bash
goldendog-nvidia-setup status                          # Card, installed driver and warnings
goldendog-nvidia-setup branches                        # NVIDIA's available branches
sudo goldendog-nvidia-setup install                    # Debian's driver
sudo goldendog-nvidia-setup install --source nvidia    # NVIDIA's driver, recommended branch
sudo goldendog-nvidia-setup install --branch 615       # NVIDIA's driver, a specific branch
sudo goldendog-nvidia-setup install --source debian    # Back to Debian's driver
```

To see what would change without changing anything, add `--dry-run` (no administrator privileges are needed for that).

## Why Not Use NVIDIA's Installer?

If you install the driver manually using a `.run` file from NVIDIA's website:

1. The driver builds a kernel module only for your **current** kernel version.
2. When GoldenDog updates the kernel, that module stops working.
3. Your system may fail to start a graphical session until you rebuild the driver by hand.

The packages that GoldenDog NVIDIA GPU Setup installs, from Debian or from NVIDIA's repository, use **DKMS** to rebuild the driver automatically every time a new kernel is installed, and are updated through `apt` with the rest of the system.

:::danger DO NOT INSTALL MANUALLY
We strongly recommend **against** installing NVIDIA drivers using the `.run` files from NVIDIA's website. It is the leading cause of system breakage after updates.
:::
