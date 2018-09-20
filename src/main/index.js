import { app, BrowserWindow } from 'electron'

let mainWindow


const isDevelopment = process.env.NODE_ENV !== 'production'

function createMainWindow() {
  const window = new BrowserWindow({ show: false })

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    window.loadFile('index.html')
  }

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  window.once('ready-to-show', window.show)

  window.on('closed', () => {
    mainWindow = null
  })

  return window
}

app.on('ready', () => {
  mainWindow = createMainWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})
