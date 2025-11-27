This page will guide you through how to use the built in GoldHEN cheats, patches and plugins.
* GoldHEN version 2.3 or above is required.

=== NOTICE FOR SAVE FILES ===   
*The Cheat Menu is experimental, use with caution. 
*Make Backups of your save files with [[PS4:Apollo Save Tool|Apollo Save Tool]] Or the native PS4 backup feature to USB.

=== NOTICE for Cheats and Patches Compatibility ===
*Cheats and Patches are not made compatible with every region or game update version. Check the Cheats/Patches zip for easiest compatibility.   
**You are able to edit the cheats to try and make them work with the same game but a different region or game update but results will vary.

=== Title ID, User ID and Account ID ===
==== What is a Title ID ====
*The product code is distinct to a region, and the common codes you’ll see are CUSA, PCAS, and PLAS.
**R1 USA-CUSA
**R2 Europe-CUSA
**R3 Asia-PLAS, PCAS

*The product code is followed by a 5 digit unique number identifier.

* The Title ID is the Product code along with the unique numerical identifier of the game.
**For example Minecraft USA is CUSA00744 while Minecraft EU is CUSA00265
**Another example Resident Evil 2, USA is CUSA09193 while Asia is PLAS10335
** The majority of games you come across will use CUSA.

==== What is a User-ID ==== 
The user ID is the internal description for the local user account. (Example - 11cd8de)

==== What is an Account-ID ====
The Account ID a PSN ID assigned to the local user. (Example - abcdef01234556789) but must be 16 hex characters.

===How to install Cheats, Patches and Plugins===
* If on GoldHEN2.4b18 or above to do it with an active internet connection go to Goldhen and in Cheats Settings you can download/update the Cheats,Patches and Plugins directly from there. 
** You can also update/download Cheats, Patches and Plugins from inside the PS4 Cheats Manager App if you have an active internet connection.
* Otherwise download them from the links below and keep your PS4 offline.
1. Download the Cheats [https://github.com/GoldHEN/GoldHEN_Cheat_Repository/archive/refs/heads/main.zip Here]
* To add cheats of your own unpack the zip you get from the link above and add the cheat to the folder of the filetype of the cheat file then zip it up again and continue the guide. 
* Alternatively if you already have a setup by using FTP with [[PS4:FileZilla|FileZilla]] go to /data/goldHEN/cheats/ you can add the cheat to the folder of the filetype of the cheat file. 
* If you need to replace a cheat file either do so or if experienced enough edit it to add the needed data. 
2. Download the Patches Zip [https://github.com/illusion0001/PS4-PS5-Game-Patch/releases/latest/download/patch1.zip Here]
* To add patches of your own unpack the zip you get from the link above and add the patch to the xml folder then zip it up again and continue the guide. 
* Alternatively if you already have a setup by using FTP with [[PS4:FileZilla|FileZilla]] go to /data/goldHEN/patches/ you can add the patch to the xml folder.
* If you need to replace a patch file either do so or if experienced enough edit it to add the needed data. 
3. Download the Plugins Zip [https://github.com/GoldHEN/GoldHEN_Plugins_Repository/releases/download/1.188/GoldPlugins-1.188-caacf011.zip Here]
* To add plugins of your own unpack the zip you get from the link above and add the plugin you have to the plugins folder then zip it up again and continue the guide. 
* Alternatively if you already have a setup by using FTP with [[PS4:FileZilla|FileZilla]] go to /data/goldHEN/plugins/ you can add the patch to folder.
#Take a USB Drive and format it to ExFAT
#Put the 3, Zip files on the USB Drive (or continue with getting Cheats Manager if you updated online)
# Download and install the PS4 Cheats Manager Homebrew pkg from PKG Zone > [https://pkg-zone.com/details/CHTM00777 Cheats Manager] You can also download it on your console if you have the Homebrew Store.
#Put the PS4_CHTM00777(Cheats Manager) pkg on the USB Drive
#Plug the USB Drive into your PS4 and Jailbreak via your preferred method.
#Install the PS4_CHTM00777(Cheats Manager) pkg
# Run PS4 Cheats Manager from the home screen
#On running PS4 Cheats Manager it usually sniffs out the 3, zip files and pulls data from them to make sure everything is where it should be you can do the following
#When you load up into the app go into the Update option
#Once inside scroll down with the D-Pad to USB 0, at the bottom and select it
#Select each zip and wait while it loads data from it
#Then Press Circle to go Back until you are asked if you want to **Exit to XMB?** then choose Yes
#Back in the home screen, select the GoldHEN icon in the top left
#Once inside, select "Cheat Settings" and tick "Enable Cheat Menu"
#Then back out and go into "Plugin Settings" then tick "Enable Plugins Loader" and "Enable Game Patch Plugin"
*Notice if you cannot tick "Enable Game Patch Plugin" then you have not setup the PS4 Cheats Manager app correctly or it failed to locate the 3, Zip files retry the setup.


===How to use Cheats in game===     
*Once you Launch a game you can Long Press the Share button (can be changed from Goldhen cheats settings) and the cheat menu will show up
* Some games have multiple pages of cheats and you can scroll through them using R1 and L1
*Some cheats require MC or Master Code to be enabled    
**To view cheats compatible with your games you can go inside the Cheats manager app and in cheats press Triangle to view all the cheats compatible with your currently installed games.

===How to use Patches===   
Go into the PS4 Cheats Manager    
And Select Patches   
*Once inside, you can press Triangle to filter out any patches for games/regions/updates that you don't have installed.
*Simply select any game(s) you'd like to try any patches for, and enable the ones you'd like.
**You can also press Triangle to view the .xml Document for a patch, which can help verify the intended update version (e.g. 01.15) or Title ID (e.g. CUSA20240). It also contains credits for the patches' author(s)
*Once you're satisfied with the patches you've selected, you can simply exit the cheats manager and start your game.
**There is no need to keep the GoldHEN Cheats Manager running in the background, as the plugin will remain running on it's own as a daemon.
*Upon starting your game and running the correct executable (for the games that use more than the initial eboot.bin), you should see a pop-up notification telling you that a certain number of patches were enabled, as well as the total amount of individual changes applied by the patches.

	
=== How to use Plugins ===
* Plugins are located in the data/GoldHEN/plugins folder.
* plugins.ini is in data/GoldHEN.
** The easiest way to add new ones and edit the plugins.ini is via FTP. (Note copy the ini edit it and replace it)
* To add custom plugins like mod menus place them in the plugins folder.
* Then edit the plugins.ini to reflect the title id of the game you want to apply the plugin to and the name of the plugin with its path
* Plugins listed in the **[default]** section will be loaded for any games or apps you launch.

* Here is an example of the plugins.ini and how it should be used. This is from the default setup that comes from following this guide.
 ; Note: lines starting with semicolon are for comments.
 ; Load plugins for any title.
 
 [default]
 /data/GoldHEN/plugins/game_patch.prx
 
 ; Load plugins only for Playroom.
 
 [CUSA00001]
 /data/GoldHEN/plugins/afr.prx
 /data/GoldHEN/plugins/no_share_watermark.prx

[[Category:PS4]]
