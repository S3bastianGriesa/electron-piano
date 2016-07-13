var electron = require('electron');
electron.app.on('ready', function(){
  var mainWindow = new electron.BrowserWindow({width: 1000, height: 563});
  mainWindow.loadURL('file://' + __dirname + '/public/main.html');
  mainWindow.webContents.openDevTools();
});
