import { app, BrowserWindow, Tray, Menu, globalShortcut } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    webPreferences: {
      preload: path.join(__dirname, 'electron-preload.js'),
    },
  });

  void mainWindow.loadURL(process.env.APP_URL);
}

void app.whenReady().then(() => {
  createWindow();

  tray = new Tray(path.join(__dirname, '../assets/tray.png'));

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open YnovTodo', click: () => mainWindow?.show() },
    { label: 'Quit', click: () => app.quit() },
  ]);

  tray.setToolTip('YnovTodo');
  tray.setContextMenu(contextMenu);

  globalShortcut.register('CommandOrControl+Shift+T', () => {
    mainWindow?.show();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
