const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on('save-annotated-images', async (event, annotatedImages) => {
    const window = BrowserWindow.getFocusedWindow();
    const { filePaths } = await dialog.showOpenDialog(window, {
        properties: ['openDirectory']
    });

    if (filePaths && filePaths[0]) {
        annotatedImages.forEach(({filename, dataURL}) => {
            const imgBuffer = Buffer.from(dataURL.replace(/^data:image\/(png|jpeg);base64,/, ''), 'base64');
            fs.writeFileSync(path.join(filePaths[0], filename), imgBuffer);
        });
    }
});
