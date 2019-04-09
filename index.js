const { app, BrowserWindow } = require('electron');

function createWindows() {
  let appWindow = new BrowserWindow();
  appWindow.loadURL('https://7ty.tech');
}

app.on('ready', createWindows);
