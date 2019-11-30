let {PythonShell} = require('python-shell')
const {app, BrowserWindow} = require('electron')
const { globalShortcut } = require('electron')


function createWindow () {
  globalShortcut.register('f5', function() {
		console.log('f5 is pressed')
		window.reload()
	})
    PythonShell.run('server.py',  function  (err, results)  {
        if  (err)  console.log(err);
       }); 
       

    window = new BrowserWindow({width: 800, height: 600})
    window.loadFile('index.html')
    
  }

  app.on('ready', createWindow)