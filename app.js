var electron = require('electron');
electron.app.on('ready', function(){
  var mainWindow = new electron.BrowserWindow({width: 1240, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/public/main.html');
});
