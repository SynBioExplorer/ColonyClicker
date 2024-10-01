# ColonyClicker

ColonyClicker is a program to manually count Colony Forming Units (CFU) from pictures. It allows users to upload images, annotate colonies, and save annotated images with the colony counts.

## Features

- Upload multiple images of bacterial colonies.
- Annotate images manually to count CFU.
- Save annotated images with colony counts in the filename.
- Navigation between images for multi-image analysis.

## Installation

### Windows (x64)
Download the latest Windows installer [ColonyClicker_win.exe](https://github.com/SynBioExplorer/ColonyClicker/releases/download/v1.0.0/ColonyClicker_win.exe) and follow the installation instructions.

### macOS
#### Intel (x64)
Download the latest macOS installer for Intel-based Macs [ColonyClicker_mac_x64.dmg](https://github.com/SynBioExplorer/ColonyClicker/releases/download/v1.0.0/ColonyClicker_mac_x64.dmg).

#### Apple Silicon (ARM64)
Download the latest macOS installer for Apple Silicon (ARM64) [ColonyClicker_mac_arm64.dmg](https://github.com/SynBioExplorer/ColonyClicker/releases/download/v1.0.0/ColonyClicker_mac_arm64.dmg).

Once downloaded, open the `.dmg` file and move the app to your Applications folder. Then, run the following command in the Terminal (you can open Terminal by pressing Command + Space and typing "Terminal") to bypass macOS security checks:
```bash
xattr -c /Applications/colonyclicker.app
```
(or the location of your program if you put it somewhere else).

### Linux
#### Intel/AMD (x64)
Download the latest Linux installer for x64 systems [ColonyClicker_linux_x64.AppImage](https://github.com/SynBioExplorer/ColonyClicker/releases/download/v1.0.0/ColonyClicker_linux_x64.AppImage).

#### ARM64
Download the latest Linux installer for ARM64 systems [ColonyClicker_linux_arm64.AppImage](https://github.com/SynBioExplorer/ColonyClicker/releases/download/v1.0.0/ColonyClicker_linux_arm64.AppImage).

To run the AppImage, make it executable:
```bash
chmod +x ColonyClicker_linux_x64.AppImage
```
Or
```bash
the ARM64 version ./ColonyClicker_linux_arm64.AppImage
```

## How to Use

1. Open the application.
2. Upload images using the "Choose Files" button.
3. Annotate each image by clicking on colonies to count them.
4. Navigate between images using the "Next" and "Previous" buttons.
5. Once finished, click "End Session & Save All" to save the annotated images.
The annotated images will get saved with annotations and the CFU count in the title, e.g. picture_24CFU.png

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
