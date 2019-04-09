const { app, BrowserWindow } = require('electron');

function createWindows() {
  let appWindow = new BrowserWindow({
    width: 600,
    height: 800,
    center: true,
    minWidth: 300
  });
  appWindow.loadFile('./index.html');
}

app.on('ready', createWindows);
