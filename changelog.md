---
layout: default
title: CHANGELOG
permalink: /changelog/
---

## 2024-12-08 - GDL 1.6.20
- Added pip
- Added Ruby 3.11 
- Added Ruby Gems
- Fixed double installer icon in desktop
- Updated system
- Added kernel 6.1.0-28-amd64


### Important, maybe:

I used to keep a very untidy register of the first days, weeks months of development.
Unfortunately I don't have a date record for these logs. But I still wanted to import them as they were, for historical (and evolutionary, hah) reasons.

Live and learn, I guess.

- Alexia.


# GoldenDog Linux 1.6.19-rc6

These are the changelog for the release candidate builds. During this stage expect more builds based on
the reports of the testing team.

Hope you enjoy running GoldenDog Linux!!!

- Alexia.

1.6.19-rc6:

```
Fixed: APT Official Debian Repositories
Improved: Integrity Check
Added: btop (An HTOP alternative)
Added: ncdu (See Disk Usage from the terminal)
Fixed: Repository Order
Fixed: goldendog-clear service
```

### Changelog

1.6.19-5:

```
- Added: Web Console 
         login with your username at https://localhost:9090
```


1.6.19-4:
```
- Fixed: bash prompt and added new prompt options to .bashprompts
  To select your favourite one, comment the one you dont want, and uncomment the one you want to use,
  then run source .bashprompts
  If you want to add more custom prompts, add them on this file.
  This new prompt helps render everything in screen correctly and doesn't wrap the text. 
  Also considers chroot (debian_chroot)
```


```
1.6.19-3: 
- added: goldendog-keyboard-service (fcitx5)
  This service provides easy configuration of keyboard layouts by region
- fixed: EULA service
  Once installed, after accepting the End User License Agreement, the service is automatically removed
```

```
1.6.19-2:
- Fixed Policy Kit Permissions for Helper agent
- Updated firefox ESR to latest version (to reduce updating time after installing iso)
- fixed gpg microsoft key location 
- updated: OpenSSL 
- updated: OpenSSH
- updated: gir1
- updated: Python 3.11
- updated: apache2-bin
- added: tree
- updated: wpasupplicant
- updated: libtommath1
```
```
1.6.19-1:
- Fixed: setuid for Policy Kit
- added: ntp
- updated: locales
- updated: libcurl4
- updated: libuno-cppu3
- updated: ghostscript
- updated: Exim4 (CVE-2024-39929)
- updated: Visual Studio Code
```

```
1.6.19:
- Removed rainbow bash prompt
  This occupied character space and made long lines look strange in the terminal. 
- Fixed home directory. Now Discover finds every directory in the home dir
- Added nano 8 Goldendog (run nano --version)
- Added syntax highlighting for nano 8 
- Added more wallpapers
- Fixed XDG paths
- Fixed polkit permissions
- Fixed root uid for sudo / pkexec / gpasswd 
- Fixed global permission enforcing
```

```
1.6.18: 
- fixed lockscreen bug 
  Users were unable to unlock the machine even using the correct password. (bad permission on /sbin/unix_chkwd
- added: irssi (Terminal-based IRC Client)
- added: Konversation (Alexia's favourite IRC Client)
- added: VIM (Terminal-based text-editor/IDE)
- added: Midnight Commander (Terminal based Admin Console / file manager / editor)
- Added: integrity check post-apt update
- removed: unused old files from previous releases to reduce .iso space
- fixed: Integrity check post update 
- fixed: removing installer icon from desktop once installation has completed
```

```
1.6.17:
- added: Python 3
- added: mlocate
- fixed: dbus helper setuid
- fixed "About this system" (Now shows GoldenDog 1.6.19)
- fixed os-release
- fixed integrity check
```
