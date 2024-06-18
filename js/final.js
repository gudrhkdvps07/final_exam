document.getElementById('menu-toggle').onclick = () => {
  const nav = document.querySelector('nav')
  nav.classList.toggle('flex-active')
}

document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('projectList')
  const projects = [
    {
      name: '중국집 키오스크',
      description:
        'Java script와 부트스트랩으로 만든 중국집 키오스크 주문 메뉴판입니다. ',
      link: 'https://kiosk-webprogramming-jbu.vercel.app/',
      img: './img/kiosk.png',
    },
    {
      name: '탁구 경기 스코어보드',
      description:
        '웹프로그래밍 시간에 만든 Java script와 부트스트랩을 이용한 탁구 경기 스코어보드입니다.',
      link: 'https://pingpong-poject-board.vercel.app/',
      img: './img/pingpong.png',
    },
    {
      name: 'Book List Web',
      description:
        '중부대 웹 프로그래밍 시간애 javascript를 통해 만든 책 정보 저장 사이트 입니다.',
      link: 'https://book-list-web-helppy.vercel.app/',
      img: './img/booklist.png',
    },
    {
      name: 'Next.js Web',
      description:
        '중부대 웹 프로그래밍 시간에 Next JS와 Tailwind CSS를 이용해 만든 웹사이트 입니다.',
      link: 'https://nextjs-blog-jbuyjp.vercel.app/',
      img: './img/nextjs.png',
    },
    {
      name: 'Next.js  Blog',
      description:
        '중부대 웹 프로그래밍 시간에 Next JS와 Tailwind CSS를 이용해 만든 블로그 입니다.',
      link: 'https://next-blog-jbu-yun-2.vercel.app/',
      img: './img/nextjs_blog.png',
    },
  ]

  // 요소 설정
  const createProjectElement = (project) => {
    const projectItem = document.createElement('div')
    projectItem.className = 'project-item'

    const projectTitle = document.createElement('h3')
    projectTitle.textContent = project.name

    const projectDescription = document.createElement('p')
    projectDescription.textContent = project.description

    const projectLink = document.createElement('a')
    projectLink.href = project.link
    projectLink.textContent = '프로젝트 방문하기'

    const projectImage = document.createElement('img')
    projectImage.src = project.img
    projectImage.alt = `${project.name} image`
    projectImage.className = 'project-image'

    projectItem.appendChild(projectImage)
    projectItem.appendChild(projectTitle)
    projectItem.appendChild(projectDescription)
    projectItem.appendChild(projectLink)

    return projectItem
  }

  projects.forEach((project) => {
    const projectElement = createProjectElement(project)
    projectList.appendChild(projectElement)
  })
})
