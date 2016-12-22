// Module dependencies
const electron = require('electron');

const shell = electron.shell;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

const debug = /--debug/.test(process.argv[2]);

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 400,
    width: 1024,
    height: 600,
    frame: false,
    titleBarStyle: 'hidden',
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  if (debug) mainWindow.webContents.openDevTools();

  mainWindow.webContents.on('will-navigate', (e, url) => {
    if (url !== mainWindow.webContents.getURL()) {
      e.preventDefault();
      shell.openExternal(url);
    }
  });

  mainWindow.on('close', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('all-window-close', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
