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
  e.target.style.border = '#333 solid 5px;'
}
