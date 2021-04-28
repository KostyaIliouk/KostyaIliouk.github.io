---
layout: post
title: Splitting a Dual Booted HDD
topic: Random
---

There are many tutorials out there on splitting a Windows dual boot onto two different drives, or moving a Linux/Windows dual boot to a different drive. Sadly, my specific dual boot scenario was not easily found and therefore I decided to make this blog post for my own personal notes in case I would need to ever do this again.

Scenario:
- Current Setup:
    - 1 TB HDD w/ 4 partitions
        - Windows boot record
        - C:
        - Ubuntu boot record (grub2)
        - Ubuntu
- Wanted Final Product:
    - 1 TB HDD w/ 3 partitions
        - Ubuntu boot record (grub2)
        - Ubuntu
        - Shared Data
    - 512 GB M.2 NVME SSD w/ 2 parititions
        - Windows boot record
        - C:

Scowering the Internet, I have found three different ways that this can be done:
1. Create a Recovery Drive & install Windows 10 through the recovery drive on the new SSD.
    - this will transfer over your activation license.
    - can then clean up old install.
2. Create a installation USB & install Windows on the new drive.
    - this will transfer over your activation license.
    - can then clean up old install.
3. Clone Windows boot & C: partitions over to the SSD.
    - this will transfer over activation license.
    - this will only work if the two original partitions <= target drive
        - this is not the case & thus will require a data purge of my C: drive

After completing any of the selected options, grub2 will need to be updated with the new location of my Windows installation.

I decided to go with Option (2). My reasoning being, I wanted to start with a clean install of Windows so that I can prune out all the unwanted applications that I have accumulated throughout the years. These were the following steps that were made:
1. Create a Windows 10 installation USB
    - download Windows 10 Installation Media tool: https://www.microsoft.com/en-ca/software-download/windows10
    - run tool & select create boot media
    - wait until process has completed
2. Turn PC off
3. Put in new bootable USB media
4. Turn PC on
    - should boot straight into the USB
5. Go through installation wizard
    - choose install (as we don't want to upgrade current installation but make a new one)
    - select the new drive that you wish to use (SSD in my case)
    - computer will restart numerous times - don't remove the USB stick
    - @ the end of this, you should have a running Windows OS on the drive & be greeted to this installation
6. Install Boot-Repair & burn it to the USB used to install Windows
    - An installation of a Boot-Repair disk can be found here: https://sourceforge.net/p/boot-repair-cd
    - To burn onto the USB you could use Rufus, installation can be found here: https://rufus.ie
9. Restart PC - w/ USB pluged in
10. Go to boot menu
    - boot into the USB paritition 1
    - select the Boot-Repair
11. Boot Repair should automatically open
    - select 'Recommended Repair'
    - follow the instructions given by copy & pasting into the termninal
12. Turn off PC
    - Everything should be gravy now. You can test booting into either OS to ensure your ease of mind.

If everything went smoothly, the result will be a bootable instance of Windows on the desired drive, and the same bootable instance of Linux - Ubuntu in my case - that was there previously. The original drive will still have to be sorted through to extract all the wanted data and a format of the original boot partition & C: drive will need to be done to reclaim thhose partitions properly.