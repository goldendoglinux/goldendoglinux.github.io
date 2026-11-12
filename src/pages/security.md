---
title: Security
description: Recommendations and good practices to keep your GoldenDog Linux system clean and secure.
---

# Keeping GoldenDog Secure

GoldenDog ships with sensible security defaults: Debian security updates enabled, Secure Boot support, hardened SSH and kernel settings, and a firewall ready to turn on. But no default replaces good habits. This page collects the practices we recommend to keep your system clean and secure over time.

:::tip Quick checklist

- Update your system at least once a week.
- Keep **GoldenDog Firewall** turned on and review its rules.
- Run `sudo linaudit` from time to time and fix what it reports.
- Only install software from trusted sources.
- Use a strong password, lock your screen, and keep backups.

:::

## 1. Keep your system updated

Most attacks take advantage of vulnerabilities that have already been fixed. Updating often is the single most important thing you can do.

GoldenDog uses the official Debian repositories with security patches enabled, plus the GoldenDog repository. To update everything from a terminal:

```bash
sudo apt update && sudo apt full-upgrade
```

You can also update from **Discover** or from the [Web Console](/docs/tweaking-goldendog/web-console), which shows security updates separately from the rest so you can apply them first.

Don't forget the other sources of software on your system:

```bash
flatpak update            # Flatpak applications (Flathub)
fwupdmgr refresh && fwupdmgr update   # firmware (BIOS/UEFI, SSD, docks, etc.)
```

:::note Reboot after kernel updates
When an update includes a new kernel or core libraries, the fix is not active until you reboot. Don't postpone reboots for weeks.
:::

To stay informed about important patches, subscribe to the **Security Updates** newsletter in the [Community](/community) section. You can also follow the [Debian Security Advisories](https://www.debian.org/security/).

## 2. Turn on the firewall and review it

GoldenDog includes **GoldenDog Firewall**, a simple interface for UFW. The welcome wizard offers to enable it on first boot; if you skipped that step, open it from the application menu (or run `goldendog-firewall`) and turn it on.

Recommended settings for a desktop or laptop:

- **Incoming: Deny.** Nobody can connect to your machine unless you allow it with a rule.
- **Outgoing: Allow.** Your applications can browse and download normally.
- **Only open the ports you actually use**, and remove the rules you no longer need.
- When you need to open a port only for your home network (for example, the Web Console on port `9090`), use the **Advanced** tab and restrict the source (**From**) to your local network, such as `192.168.1.0/24`, instead of opening it to everyone.

Review your rules every now and then, especially after trying out new software or servers. You can also check the state from a terminal:

```bash
sudo ufw status verbose
```

:::caution Public networks
On public Wi-Fi (airports, cafés, hotels) the firewall is essential. Make sure it is active before connecting.
:::

## 3. Audit your system with linaudit

GoldenDog includes [`linaudit`](https://lexiworks.dev/linaudit), a **read-only** security audit: it looks at your machine the way an attacker or an auditor would, gives you a score from 1 (worst) to 10 (best), and tells you in plain words what is wrong, how serious it is and how to fix it. It never changes anything on your system.

Open a terminal (Konsole) and run:

```bash
sudo linaudit
```

The first time, it asks which language you prefer and what kind of machine this is. For a personal computer, choose the **desktop** profile. When it finishes, you'll see three tabs: **Summary**, **Findings** (each problem with its fix, which you can copy with `y`) and **Categories**. Press `?` to see the shortcuts and `q` to quit.

Some useful options:

```bash
sudo linaudit --fast     # skips full disk scans: seconds instead of minutes
sudo linaudit --plain    # plain-text report instead of the interactive interface
```

To run an audit automatically once a week (the latest report is saved in `/var/lib/linaudit/latest.json`):

```bash
sudo systemctl enable --now linaudit.timer
```

A few things to keep in mind:

- **Run it with `sudo`.** Without root, many checks can't be evaluated and the score is capped.
- Treat findings as **things to review**, not verdicts. Some checks are heuristic and may produce false positives.
- If a finding is a conscious decision, you can document it in `/etc/linaudit/waivers.conf` with the reason.
- Reports describe the weak points of your machine: **keep them private** and don't paste them in public forums without reviewing them first.

## 4. Install software only from trusted sources

- Prefer the **Debian and GoldenDog repositories** (`apt`, Discover) and **Flathub** for Flatpak applications.
- **Don't mix in repositories from other distributions**, such as Ubuntu PPAs. Besides being a security risk, it is one of the most common ways to break a Debian-based system.
- Be careful with loose `.deb` files and with commands like `curl ... | sudo bash`. Download them only from the official project website and, when possible, read the script before running it.
- **Never paste commands into the terminal that you don't understand**, especially if a stranger sent them to you on a chat or a forum.
- Review the permissions of your Flatpak applications with `flatpak info --show-permissions <app>` or with **Flatseal** (available on Flathub), and remove access to your whole home folder or devices from the apps that don't need it.
- Uninstall the programs you no longer use. Less software means fewer things to keep updated.

## 5. Protect your accounts and passwords

- Use a **long, unique password** for your user. A phrase of several words is easier to remember and harder to guess.
- Use a **password manager** (for example, KeePassXC, available with `sudo apt install keepassxc`) and turn on two-factor authentication on your online accounts.
- **Lock your screen** when you step away (<kbd>Meta</kbd> + <kbd>L</kbd>) and set it to lock automatically after a few minutes of inactivity.
- Use `sudo` only when it is really necessary, and don't work logged in as `root`.
- If more people use the computer, create a separate account for each one and only give administrator permissions to whoever really needs them.

## 6. Encrypt your disk and keep Secure Boot on

If you use a laptop, **disk encryption** protects your data if the computer is lost or stolen. See the guide on [installing GoldenDog on LUKS](/docs/tweaking-goldendog/installing-on-luks).

GoldenDog supports **Secure Boot**. If your machine has it, keep it enabled: it helps prevent malicious code from loading before the operating system.

## 7. Be careful with remote access

GoldenDog's SSH defaults are already hardened (`root` cannot log in over SSH, weak algorithms are removed, and more). Even so:

- If you don't need to connect to your machine from another one, **don't install or enable the SSH server**.
- If you do need it, use **SSH keys** instead of passwords and only open port `22` in the firewall for the networks you trust.
- The [Web Console](/docs/tweaking-goldendog/web-console) (Cockpit) gives full control of the system. Don't expose port `9090` to the internet; if you use it remotely, restrict it to your local network.

## 8. Keep backups

No security measure is perfect. A good backup is what lets you recover from a disk failure, a mistake or ransomware.

- Follow the **3-2-1 rule**: three copies of your data, on two different media, one of them outside your home (or in the cloud, encrypted).
- Keep at least one copy **disconnected** from the computer, so a problem on the system can't reach it.
- Tools like **Timeshift** (system snapshots) or **Kup** (personal files) are available in the repositories.
- **Test restoring a file** from time to time. A backup you've never restored is a backup you don't know works.

## 9. Browse with common sense

- Keep your browser updated and install only the extensions you really need, from their official store.
- Be wary of urgent emails or messages asking for passwords, codes or payments. When in doubt, go to the website by typing its address yourself.
- Remember that Linux is not immune to malware: most infections start with the user running something they shouldn't.

## 10. If you install a custom kernel

A custom kernel doesn't receive Debian's security patches automatically: you become responsible for following CVEs and recompiling. If you only need a newer kernel, prefer the **backports** kernel. More details in the [Custom Kernel Guide](/docs/tweaking-goldendog/custom-kernel).

## Did you find a problem?

If you think you found a security problem in GoldenDog, or you have questions about these recommendations, write to us through [support](https://github.com/goldendoglinux/support/issues) or stop by the [community](/community) channels.

Security is not a product you install once: it's a habit. Thank you for taking care of your GoldenDog! 🐶
