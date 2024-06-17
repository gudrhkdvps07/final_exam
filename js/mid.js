document.getElementById('menu-toggle').onclick = () => {
  const nav = document.querySelector('nav')
  nav.classList.toggle('flex-active')
}

document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('projectList')
  const projects = [
    {
      name: 'HCJ DEMO',
      description: '처음 만든 웹 데모페이지 입니다.',
      link: 'https://hc-jdemo.vercel.app/',
      img: './img/hcjdemo.png',
    },
    {
      name: 'Blog Homepage',
      description: '웹프로그래밍 시간에 만든 블로그입니다.',
      link: 'https://webblog-demo-jbu.vercel.app/',
      img: './img/webblog.png',
    },
    {
      name: 'My Portfolio',
      description:
        '중부대 웹프로그래밍 중간고사 과제입니다. HTML과 순수 CSS로만 만든 웹사이트 입니다.',
      link: 'https://midterm-jbu-yun.vercel.app/',
      img: './img/myportfolio.png',
    },
    {
      name: 'Tailwind Web',
      description: 'Tailwind CSS를 통해 만든 웹사이트 입니다.',
      link: 'https://tailwind-test-orpin.vercel.app/',
      img: './img/tailwindweb.png',
    },
    {
      name: 'Bootstrap Web',
      description: '부트스트랩을 통해 만든 웹사이트 입니다.',
      link: 'https://bootstrap-web-flax.vercel.app/',
      img: './img/bootstrapweb.png',
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
