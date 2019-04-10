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

  let aboutWindow = new BrowserWindow({
    width: 300,
    height: 275,
    frame: false
  });

  aboutWindow.loadFile('about.html');

  appWindow.once('ready-to-show', ()=> {
    appWindow.show();
    aboutWindow.show();
  });

  aboutWindow.on('closed', () => {
    aboutWindow = null
  });
}

app.on('ready', createWindows);
