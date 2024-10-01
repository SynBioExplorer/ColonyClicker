# ColonyClicker

ColonyClicker is a program to manually count Colony Forming Units (CFU) from pictures. It allows users to upload images, annotate colonies, and save annotated images with the colony counts.

## Features

- Upload multiple images of bacterial colonies.
- Annotate images manually to count CFU.
- Save annotated images with colony counts in the filename.
- Navigation between images for multi-image analysis.

## Installation

### Windows
Download the latest Windows installer [ColonyClicker.exe](https://github.com/SynBioExplorer/ColonyClicker/releases/download/v1.0.0/ColonyClicker.exe) and follow the installation instructions.

### macOS (ARM64)
Download the latest macOS installer for Apple Silicon (ARM64) [ColonyClicker_arm64.dmg](https://github.com/SynBioExplorer/ColonyClicker/releases/download/v1.0.0/ColonyClicker_arm64.dmg).

Open the .dmg file and move it to your applications folder. 
Open the terminal (command + space, type in terminal, enter) type: 

xattr -c /Applications/colonyclicker.app 

(or the location of your program if you put it somewhere else).

## How to Use

1. Open the application.
2. Upload images using the "Choose Files" button.
3. Annotate each image by clicking on colonies to count them.
4. Navigate between images using the "Next" and "Previous" buttons.
5. Once finished, click "End Session & Save All" to save the annotated images.
The annotated images will get saved with annotations and the CFU count in the title, e.g. picture_24CFU.png

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
