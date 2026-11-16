---
sidebar_position: 3
---

# Managing GoldenDog with the Web Console

GoldenDog Linux comes with **Cockpit** pre-installed, a powerful web-based interface that allows you to manage your machine with ease. Whether you are a server administrator or a desktop user, the Web Console provides a clear overview of your system's health and performance.

![Cockpit Login](/img/cockpit-login.png)

## Enabling the Web Console

For security reasons, the Web Console comes **disabled** by default. You can turn it on in either of these ways:

- **From the Security Center (recommended):** open **Security Center** from the application menu and, under **Remote Access**, turn on **Cockpit web console**. This also opens port 9090 in the firewall, and an **Open Cockpit** shortcut appears below the switch.
- **From a terminal:**

  ```bash
  sudo systemctl enable --now cockpit.socket
  ```

  This method does not change the firewall, so the Web Console will only be reachable from this computer (`localhost`).

To turn it off again, use the same switch in the Security Center, or run `sudo systemctl disable --now cockpit.socket`.

:::tip
Leave the Web Console off when you are not using it. Every service that listens on the network is one more door into your computer.
:::

## How to Access

1.  Open **Firefox** (or your browser of choice).
2.  Navigate to `http://localhost:9090`.
3.  Log in using your standard GoldenDog **username** and **password**.

### Remote Management
You can also manage your GoldenDog machine from another device on your local network. Simply find your machine's local IP address and navigate to `http://[your-local-ip]:9090` from any browser on the same network.

For this to work, port 9090 must be open in the firewall. The Security Center opens it automatically when you turn the Web Console on; if you enabled it from a terminal, add a rule allowing TCP port 9090 in [Goldendog Firewall](/docs/firewall).

## Administrative Access

By default, the Web Console may start in a "limited" mode for security. To perform administrative tasks like installing updates or changing system settings:
1.  Click the **"Turn on administrative access"** button (usually at the top of the interface).
2.  Provide your user password when prompted.

## Key Features

### Intelligent Update Management
Cockpit simplifies system maintenance by clearly separating updates into two categories:
-   **Security Updates**: Critical patches that should be applied as soon as possible to keep your system safe.
-   **Other Package Updates**: General software improvements and bug fixes.

### System Health at a Glance
The dashboard gives you real-time data on CPU usage, memory consumption, and storage status.

![Cockpit Dashboard](/img/cockpit-dashboard.png)

### Terminal Access
Need to run a quick command? The Web Console includes a fully functional terminal emulator, so you can manage your system via CLI without leaving your browser.
