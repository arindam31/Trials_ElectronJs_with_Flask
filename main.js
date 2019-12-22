var python_shell = require('python-shell')

const {app, BrowserWindow} = require('electron')
const { globalShortcut } = require('electron')


function createWindow () {
          globalShortcut.register('f5', function() {
		      console.log('f5 is pressed')
		      window.reload()
                        })
        
          python_shell.PythonShell.run('server.py',  function  (err, results)  {
          if  (err)  console.log(err);
          }); 
          

          window = new BrowserWindow({width: 800, height: 600})
          window.loadFile('index.html')
          // window.loadURL('127.0.0.1:5000/home')
    
  }

  app.on('ready', createWindow)

  
  // app.on('window-all-closed', () => {
  //   app.quit()
  //   kill(python_shell.PythonShell.pid);
  //    })  