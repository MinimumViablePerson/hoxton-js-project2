import './style.css'

function render() {
  let appEl = document.querySelector('#app')
  if (!appEl) return
  appEl.textContent = ''

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'Is this the real life?'

  let titleEl2 = document.createElement('h1')
  titleEl.textContent = 'nah fam?'
  // please dont hate me
  // i will be good
  // ill bring cookies

  appEl.append(titleEl, titleEl2)
}

render()
