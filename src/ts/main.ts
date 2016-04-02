/// <reference path="typings/browser/ambient/github-electron/electron-prebuilt/index.d.ts" />

'use sctrict';

const app = require('app');
const BrowserWindow = require('browser-window');

const mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/../html.index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
})
