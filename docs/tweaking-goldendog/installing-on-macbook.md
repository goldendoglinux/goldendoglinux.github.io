---
sidebar_position: 4
---

# Installing GoldenDog on a Macbook

This guide is aimed at Intel Macbooks.

The installation process is similar to installing GoldenDog on any Intel/AMD machines. After installation, some users report that the audio speakers of the Macbook produce no sound.

## Audio Workaround

A workaround to get the audio working on GoldenDog installed on Apple Macbook Intel hardware is the following:

1. Open the terminal and type:
   ```bash
   sudo apt update
   sudo apt install linux-headers-amd64 # installs goldendog/trixie metapackage for the linux headers
   sudo apt install dkms # installs dkms
   ```

2. Clone the audio driver repository:
   ```bash
   git clone https://github.com/leifliddy/macbook12-audio-driver
   cd macbook12-audio-driver
   ```

3. Obtain the kernel number:
   ```bash
   uname -r
   ```

4. If the kernel is `6.12.57`, run the installation script:
   ```bash
   sudo bash install.cirrus.driver.sh -k 6.12.57
   ```
   *(Note: Replace `6.12.57` with your actual kernel version obtained in the previous step.)*

5. Finally, reboot your machine for the changes to take effect:
   ```bash
   sudo reboot
   ```

The new driver should be compiled and audio should play normally after the reboot.

## Verification

To verify that the driver is loaded:
```bash
sudo lsmod | grep -ia cirrus
```
