import { BrowserWindow, app } from 'electron'

let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow()

  mainWindow.loadFile('src/index.html')

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
