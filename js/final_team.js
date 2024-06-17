document.getElementById('menu-toggle').onclick = () => {
  const nav = document.querySelector('nav')
  nav.classList.toggle('flex-active')
}

class DarkModeToggle {
  constructor(iconId, targetElements) {
    this.icon = document.getElementById(iconId)
    this.targetElements = targetElements
    this.initialize()
  }

  initialize() {
    this.icon.addEventListener('click', () => {
      this.toggleDarkMode()
    })
  }

  toggleDarkMode() {
    this.targetElements.forEach((element) => {
      element.classList.toggle('dark-mode')
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const targetElements = [
    document.body,
    document.getElementById('header'),
    document.getElementById('footer'),
  ]
  const darkModeToggle = new DarkModeToggle('dark-mode-icon', targetElements)
})
