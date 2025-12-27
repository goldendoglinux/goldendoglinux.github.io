---
sidebar_position: 2
---

# Custom Kernel Guide

Installing a custom kernel on GoldenDog Linux can be an engaging challenge, especially for seekers of deep system optimization. However, it is a task that comes with significant responsibility.

:::caution Security Responsibility
When you install a custom kernel, you are responsible for monitoring **CVEs** (Common Vulnerabilities and Exposures). A CVE is a publicly disclosed security flaw. Unlike official packages, custom kernels require you to manually apply patches from [kernel.org](https://www.kernel.org) and recompile frequently to keep your system secure.
:::

## Option 1: Alexia's Kernel Installer (Advanced)

If you want the absolute latest stable kernel, the recommended tool is **[Alexia's Kernel Installer](https://github.com/alexiarstein/kernelinstall)**.

Created by the lead developer of GoldenDog Linux, this tool fully supports the distribution. It streamlines the process by:
-   Downloading the latest stable source code from kernel.org.
-   Optimizing the configuration specifically for GoldenDog/Debian.
-   Compiling and installing the kernel automatically.

### Important Considerations
-   **Security**: You must run the program again to recompile whenever a new security patch (CVE) is released for the stable branch.
-   **Proprietary Drivers**: Installing a new kernel version usually requires you to reinstall or recompile proprietary modules such as **NVIDIA** or **VMware**.

---

## Option 2: Debian Backports (Recommended)

This is the safest and most efficient option for most users. It allows you to run a modern kernel while letting the Debian security team handle the patching for you. Since these are provided as pre-compiled binaries, the installation is much faster than compiling your own.

### Installation Steps

1.  **Update your package lists:**
    ```bash
    sudo apt update
    ```

2.  **Install the kernel and headers from backports:**
    ```bash
    sudo apt -t trixie-backports install linux-image-amd64 linux-headers-amd64 -y
    ```

3.  **Reboot your machine:**
    ```bash
    sudo reboot
    ```
    After rebooting, your system will be running the latest kernel version available in the backports repository.
