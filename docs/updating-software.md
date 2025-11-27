---
lang: en-US
title: Updating your System Software
---

## Required Reading

The modern exploit methods (Mainly PSFree & BD-JB) have only been implemented to work with 7.00 to 9.60 and 9.00 to 12.52 consoles respectively, and the 5.05/6.72 exploits have not been implemented to be multi-firmware compatible either. 

As a result, older firmware versions must update manually in order to use an exploit.

While this guide focuses on updating to 5.05 or 6.72 (for systems that have System Software older than 7.00 but aren't already 5.05 or 6.72), this method will work for any firmware, as long as the target firmware version is above your current firmware version.

Note that you can only update to a target firmware version if your System Software is the same or older. If, for example, you are on firmware version 5.50 and wanted to downgrade to 5.05, it would not work.

We will ensure that the PS4 uses the update file we want by disabling network connectivity and deleting any pre-downloaded updates. It is also recommend to disable automatic updates to stop your PS4 from updating in the future without your permission.

## What you need

- A computer
- An exFAT or FAT32 formatted USB storage device with ~500 MB or more of free space
- The `PS4UPDATE.PUP` file corresponding to the firmware version you are trying to update to
  - [<i class="fas fa-download"></i> PS4UPDATE.PUP](https://archive.org/download/PS4-System-Firmwares/Firmware%205.05/PS4UPDATE.PUP) (5.05)
    - Download this if your system is on 5.03 or lower. 
  - [<i class="fas fa-download"></i> PS4UPDATE.PUP](https://archive.org/download/PS4-System-Firmwares/Firmware%206.72/PS4UPDATE.PUP) (6.72)
    - Download this if your system is on 5.50 to 6.71.
  - [<i class="fas fa-download"></i> PS4UPDATE.PUP](https://archive.org/download/PS4-System-Firmwares/Firmware%209.60/PS4UPDATE.PUP) (9.60)
    - The 9.60 link is mainly if your system is currently on 7.00 to 9.51 and want a bit more support for physical game discs. You should still download 5.05 or 6.72 if your system is compatible with one of them.

## Instructions

### Section I - Drive Preparation

1. Plug your USB device into your computer
1. Create a folder named `PS4` on the root of your USB drive
1. Create a folder named `UPDATE` in the `PS4` folder on your USB drive
1. Rename your downloaded update file to `PS4UPDATE.PUP` if it is not already named that
    - If you downloaded the update from the link above, you won't need to do this
1. Move `PS4UPDATE.PUP` to the newly created `UPDATE` folder

### Section II - Console preparation

1. Check your notifications to ensure you have no updates downloaded
    - If you do, delete the updates
1. Open the Settings application
1. Navigate to the "Network" section and open it
1. Ensure that "Connect to the Internet" is disabled
1. Go back to return to the main Settings menu
1. Navigate to the "System" section and open it
1. Navigate to the "Automatic Downloads" section and open it
1. Ensure that all options in this section are disabled
1. Go back to return to the main Settings menu

### Section III - Updating to your target firmware

1. Plug your USB device into your PS4
1. Navigate to the "System Software Update" section in the Settings application
1. **Ensure that the number after "Version" says the versoion number of the file you're trying to install.**
    - If it does not, go back and repeat these instructions again
    - If you are trying to update to a different firmware version, this text should say the firmware that you want instead
1. Press "Next"
1. Press "Update"

Your PS4 should restart to complete the update. Once finished, you should boot back into the firmware you installed.

#### Section IV - Finishing up

1. Open the Settings application
1. Navigate to the "Network" section and open it
1. To use network functionality, enable "Connect to the Internet"

::: tip
You can now return to [Get Started](get-started) to determine the exploit method for your firmware version. 
:::
