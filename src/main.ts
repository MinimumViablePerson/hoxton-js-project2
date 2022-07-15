import './style.css'

function render() {
  let appEl = document.querySelector('#app')
  if (!appEl) return
  appEl.textContent = ''

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'No, its MY project!!!'

  appEl.append(titleEl)
}

render()
