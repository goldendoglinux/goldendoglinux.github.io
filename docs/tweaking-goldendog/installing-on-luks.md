---
sidebar_position: 5
---

# Installing GoldenDog on a LUKS Encrypted Partition

This guide provides a step-by-step walkthrough for installing GoldenDog on a pre-existing LUKS encrypted partition. This is a manual process that requires using the terminal during the installation.

:::warning
This process involves manual disk partitioning and terminal commands. There are no guarantees; proceed at your own risk. Ensure you have a backup of your data.
:::

## Manual Partitioning

The Debian installer might not detect encrypted partitions automatically. Follow these steps to prepare the disk:

1. In the **Partition disks** screen, select **Manual**.
2. Select the encrypted partition (e.g., `/dev/sda6`) or any other you intend to use.
3. Press **Enter** and under **How to use this partition:**, select **physical volume for encryption**. This will load the necessary modules and programs.
4. Go back to **How to use this partition:** and select **do not use the partition**, then choose **Done setting up the partition**.

## Opening the Encrypted Volume

1. Open a console by pressing `Ctrl+Alt+F2`.
2. Run the following command to open the partition (replace `sda6` with your partition):
   ```bash
   cryptsetup luksOpen /dev/sda6 volume_name
   ```

3. Return to the installer by pressing `Ctrl+Alt+F5` (or `F1/F7` depending on the system).
4. Click the **Go Back** button.

## Configuring the Volumes

1. Select **Detect disks** and click **Continue**. The encrypted volume should now be visible.
2. Configure your partitions for `/` (root) and `swap` as desired, but **do not touch the encrypted partition** `/dev/sda6` directly yet.
3. Select the partition inside the encrypted volume, go to **How to use this partition:** and choose **physical volume for encryption**.
4. **IMPORTANT:** When asked to **Erase data**, select **NO**.
5. Choose **Done setting up the partition**.
6. Select **Finish partitioning and write changes to disk**. Ensure the encrypted partition is NOT marked for formatting.

## Final System Configuration

Before the installation finishes, we need to ensure the system knows how to mount the encrypted volume.

1. Switch back to the console with `Ctrl+Alt+F2`.
2. Get the UUID of the encrypted partition:
   ```bash
   cryptsetup luksUUID /dev/sda6
   ```
   *Note down this UUID.*

3. Edit the `fstab` of the new system:
   ```bash
   nano /target/etc/fstab
   ```
   Add the following line (adjusting for your mount point, e.g., `/home`):
   ```text
   /dev/mapper/home-cifrado /home ext4 defaults 0 2
   ```

4. Edit the `crypttab` of the new system:
   ```bash
   nano /target/etc/crypttab
   ```
   Add the following line:
   ```text
   home-cifrado UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx none luks
   ```
   *Replace `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` with the UUID you obtained earlier.*

5. Return to the installer, finish the installation, and install the bootloader.
6. Restart your system. You will be prompted for the password to mount the encrypted volume.


_Document Written by noname from the Debian Argentina community_