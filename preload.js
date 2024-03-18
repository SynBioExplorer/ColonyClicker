const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveAnnotatedImages: (annotatedImages) => ipcRenderer.send('save-annotated-images', annotatedImages)
});
