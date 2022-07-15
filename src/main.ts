import './style.css'

function render () {
  let appEl = document.querySelector('#app')
  if (!appEl) return
  appEl.textContent = ''

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'Is this the real life?'

  appEl.append(titleEl)
}

render()
