## BrowserWindow

BrowserWindow is one of the most configurable components in electron, so it's worth exploring some of the configuration options.

```
{
  width: 800,
  height: 600,
  x: 10,
  y: 200,
  minWidth: 800,
  minHeight: 600,
  maxWidth: no limit,
  maxHeight: no limit,
  resizable: true,
  movable: true, //not linux
  minimizable: true, //not linux
  maximizable: true, //not linux
  closable: true, //not linux
  alwaysOnTop: false, //not linux
  fullscreen: false,
  center: true
  webPreferences: {
  nodeIntegration: true
  }
}
```

There's way too much depth to cover everything in BrowserWindow, so take a look at the [documentation](https://electronjs.org/docs/api/browser-window) if you want to play around.
