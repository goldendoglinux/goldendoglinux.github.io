---
sidebar_position: 1
---

# Installing GNOME

This guide explains how to install the GNOME desktop environment on GoldenDog Linux. 

:::warning Unsupported Configuration
Installing additional desktop environments via `tasksel` is **not officially supported**. While GNOME and other environments will likely run without issues, using this method may produce unexpected behavior that we cannot offer formal support for. 

We may provide volunteer guidance if you run into problems, but please be aware that this is an unsupported setup. You can reach out via the [support tickets](/community) for community help.
:::

## Installation Steps

1.  **Update your system:**
    Open a terminal and run:
    ```bash
    sudo apt update
    ```

2.  **Launch Tasksel:**
    Run the task selector tool:
    ```bash
    sudo tasksel
    ```

3.  **Configure desktop environments:**
    In the `tasksel` interface:
    -   **Uncheck** the option `debian desktop environment`.
    -   **Check** the option `GNOME`.
    -   *(Optional)* If you are running on a laptop, check the `laptop` option.

4.  **Important Notes:**
    KDE Plasma and the SSH Server are already installed. **Do not re-select** the following:
    -   `KDE Plasma`
    -   `SSH Server`
    
    Re-selecting these tools when they are already present may produce unexpected results.

5.  **Reboot and Select GNOME:**
    Once the installation is complete, reboot your system:
    ```bash
    sudo reboot
    ```
    At the login screen:
    1.  Select your user.
    2.  Before entering your password, click the **cog wheel icon** in the bottom-right corner of the screen.
    3.  Select **GNOME** from the list.
    4.  Enter your password and log in.
