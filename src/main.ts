import { app, BrowserWindow } from 'electron';
import * as path from 'path';
const client = process.env.NODE_ENV === 'development' ? require('electron-connect').client : void 0;

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 800, height: 600, minWidth: 800, webPreferences: {
      experimentalFeatures: true,
    },
    title: 'bookmark0r'
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.maximize();
  if (client !== void 0) {
    console.log('creating client')
    client.create(mainWindow);
  }
  console.log(__dirname);
});

app.on('window-all-closed', function () {
  app.quit();
});