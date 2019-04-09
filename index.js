const { app, BrowserWindow } = require('electron');

function createWindows() {
  let appWindow = new BrowserWindow({
    width: 600,
    height: 800,
    center: true,
    minWidth: 300,
    show: false
  });
  appWindow.loadFile('./index.html');

  appWindow.on('closed', () => {
    appWindow = null
  });

  appWindow.once('ready-to-show', ()=> {
    appWindow.show();
  });
}

app.on('ready', createWindows);
