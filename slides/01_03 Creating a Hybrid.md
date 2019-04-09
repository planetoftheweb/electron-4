```
const { app, BrowserWindow } = require('electron');

function createWindows() {
  let appWindow = new BrowserWindow();
  appWindow.loadFile('index.html');
}

app.on('ready', createWindows);
```
