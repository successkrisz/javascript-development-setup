import './index.css'
const app = name => {
  const MOUNT_NODE = document.getElementById('root')
  const displayName = name || 'World'

  MOUNT_NODE.innerHTML = `<h1>Hello ${displayName}</h1>`
}

// Goooo
app()

if (module.hot) {
  module.hot.accept()
}
