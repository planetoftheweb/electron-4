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
    frame: false,
    show: false
  });

  aboutWindow.loadFile('about.html');

  appWindow.once('ready-to-show', ()=> {
    appWindow.maximize();
    appWindow.show();

    setTimeout(()=>{
      aboutWindow.show();
      setTimeout(()=>{
        aboutWindow.hide();
      }, 3000);
    }, 1000);
  });

  aboutWindow.on('closed', () => {
    aboutWindow = null
  });
}

app.on('ready', createWindows);
