const { app, BrowserWindow } = require('electron');
const windowConfig = {
  width: 1080,
  height: 550,
  frame: false,
  transparent: true,
  useContentSize: true,
  maximizable: false,
  minimizable: true,
  maxWidth: 1080,
  minWidth: 400,
  minHeight: 40,
  x: 40,
  y: 20,
  icon: __dirname + '/logo.ico',
  alwaysOnTop: true,
  webPreferences: { nodeIntegration: true, enableRemoteModule: true, contextIsolation: false }
};
const createWindow = () => {
  let win = new BrowserWindow(windowConfig);
  win.loadFile('src/index.html');
  win.webContents.openDevTools({ mode: "detach", activate: true });
  win.on('close', () => win = null);
}
app.on('ready', createWindow);
app.on('window-all-closed', () => app.quit());
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length == null)
    createWindow();
});