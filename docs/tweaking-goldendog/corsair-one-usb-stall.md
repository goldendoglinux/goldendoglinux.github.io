---
sidebar_position: 5
---

# Fixing a Long USB Boot Stall on Corsair ONE

Some Corsair ONE machines (MSI Z370I boards) spend roughly a minute in the kernel during boot with repeated messages like:

```text
usb 1-11: device descriptor read/64, error -110
```

## Cause

On affected Corsair ONE units, **USB2 port `1-11` and its USB3 peer `2-5`** are hardwired/ghost ports that never finish descriptor negotiation. The kernel retries them for a long time before continuing.

This is easy to mis-attribute to an external dongle (keyboard receiver, wireless charging pad, Apple Watch cable). Those devices can stay plugged in. The stall is the internal ghost port timing out, not a normal removable gadget.

## Why a systemd Service Alone Is Not Enough

A oneshot that runs:

```bash
echo 1 > /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable
```

is useful as a backup, but systemd often starts **after** the kernel has already burned most of that minute on USB probe. You need the disable earlier, plus a shorter descriptor timeout as a safety net.

## Fix

### 1. Kernel command line (`/etc/default/grub`)

Add Corsair USB quirks and a short initial descriptor timeout:

```bash
GRUB_CMDLINE_LINUX_DEFAULT="usbcore.quirks=1b1c:0c04:k,1b1c:0c10:k,1b1c:0c15:k usbcore.initial_descriptor_timeout=1000"
```

Then:

```bash
sudo update-grub
```

(Keep any other options you already have on that line; merge carefully.)

### 2. Early initramfs disable

Create `/etc/initramfs-tools/scripts/init-top/disable-usb1-11`:

```sh
#!/bin/sh
# Disable stuck Corsair ONE hardwired USB port before/during hub enum.
# Port 1-11 (USB2) + peer 2-5 (USB3) cause long error -110 timeouts.
PREREQ=""
prereqs() { echo "$PREREQ"; }
case $1 in
	prereqs) prereqs; exit 0 ;;
esac

(
	i=0
	while [ "$i" -lt 200 ]; do
		ok=0
		if [ -e /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable ]; then
			echo 1 > /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable 2>/dev/null && ok=1
		fi
		if [ -e /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable ]; then
			echo 1 > /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable 2>/dev/null
		fi
		[ "$ok" -eq 1 ] && exit 0
		i=$((i + 1))
		sleep 0.05
	done
) &
```

```bash
sudo chmod +x /etc/initramfs-tools/scripts/init-top/disable-usb1-11
sudo update-initramfs -u
```

### 3. Systemd backup (optional but recommended)

`/etc/systemd/system/disable-usb1-11.service`:

```ini
[Unit]
Description=Disable stuck hardwired USB port 1-11 (and USB3 peer 2-5)
DefaultDependencies=no
After=systemd-udevd.service sys-bus-usb.mount
Before=basic.target

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStart=/bin/sh -c 'for i in 1 2 3 4 5 6 7 8 9 10; do \
  ok=1; \
  if [ -e /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable ]; then echo 1 > /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable; else ok=0; fi; \
  if [ -e /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable ]; then echo 1 > /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable; else ok=0; fi; \
  [ $ok -eq 1 ] && exit 0; \
  sleep 0.2; \
done; exit 1'

[Install]
WantedBy=sysinit.target
```

```bash
sudo systemctl enable --now disable-usb1-11.service
```

## Verify After Reboot

```bash
systemd-analyze
cat /proc/cmdline
sudo dmesg | grep '1-11'
cat /sys/bus/usb/devices/1-0:1.0/usb1-port11/disable
cat /sys/bus/usb/devices/2-0:1.0/usb2-port5/disable
```

You want:

- `usbcore.initial_descriptor_timeout=1000` in the cmdline
- kernel time much closer to a few seconds than ~70s
- little or no long `error -110` spam for `1-11`
- both port `disable` files reading `1`

## BIOS Notes That Helped on MSI Z370I

- Boot Mode: Pure UEFI
- Secure Boot: Disabled
- XHCI Hand-off: Enabled
- Legacy USB Support: Disabled
- SATA/Storage: AHCI

## Related

If the same machine also fails to start a graphical session on an RTX GPU, see [NVIDIA Driver Installation](../nvidia-drivers.md) — especially the section on recovering when NVIDIA is not loading at all.
