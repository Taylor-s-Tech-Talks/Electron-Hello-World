// import all modules needed for the application to function
const { app, BrowserWindow } = require('electron');
const path = require('path')

// create main window for app
function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        icon: path.join(__dirname, 'assets', 'img', 'icon.png'),
        title: 'Hello World',
    });

    win.setTitle('Hello World');
    win.loadFile('index.html');
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});