document.getElementById('menu-toggle').onclick = () => {
  const nav = document.querySelector('nav')
  nav.classList.toggle('flex-active')
}

//const current = document.getElementById('current')
const current = document.querySelector('#current') // 이거랑 위랑 같은거
const imgs = document.querySelectorAll('.imgs img') //imgs 클래스 내의 img 태그를 배열로 넣어라!
console.log(imgs)
imgs.forEach((img) => img.addEventListener('mouseover', imgClick))

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1))
  current.src = e.target.src
  current.classList.add('fade-in')
  setTimeout(() => current.classList.remove('fade-in'), 500)
  e.target.style.opacity = 0.4
  e.target.style.border = '#ffffff solid 5px;'
}

// 다크모드
document.getElementById('menu-toggle').onclick = () => {
  const nav = document.querySelector('nav')
  nav.classList.toggle('flex-active')
}

class DarkModeToggle {
  constructor(iconId, targetElements) {
    this.icon = document.getElementById(iconId) // iconId: 다크 모드를 토글할 아이콘의 ID
    this.targetElements = targetElements // targetElement: 다크 모드를 적용할 타겟 요소

    this.initialize() // 아이콘 요소를 가져와서 this.icon에 저장
  }

  initialize() {
    this.icon.addEventListener('click', () => {
      this.toggleDarkMode()
    })
  }

  toggleDarkMode() {
    this.targetElements.forEach((element) => {
      element.classList.toggle('dark-mode') // dark-mode 클래스가 있으면 제거하고, 없으면 추가
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

  // 첫 번째 인자: 아이콘의 ID
  // 두 번째 인자: 다크 모드를 적용할 타겟 요소
})
