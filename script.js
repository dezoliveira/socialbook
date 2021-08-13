var settingsmenu = document.querySelector('.settings-menu')
var darkBtn = document.getElementById('dark-btn')

//Função para aparecer o menu
function settingsMenuToggle() {
  settingsmenu.classList.toggle('settings-menu-height')
}

//função Dark Mode
darkBtn.onclick = function () {
  //On/Off do botão
  darkBtn.classList.toggle('dark-btn-on')
  //Aplicar o Estilo de cor no documento
  document.body.classList.toggle('dark-theme')

  //local storage
  if (localStorage.getItem('theme') == 'light') {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
}

//local storage
if (localStorage.getItem('theme') == 'light') {
  darkBtn.classList.remove('dark-btn-on')
  document.body.classList.remove('dark-theme')
} else if (localStorage.getItem('theme') == 'dark') {
  darkBtn.classList.add('dark-btn-on')
  document.body.classList.add('dark-theme')
} else {
  localStorage.setItem('theme', 'light')
}
