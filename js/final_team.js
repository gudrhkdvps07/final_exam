document.getElementById('menu-toggle').onclick = () => {
  const nav = document.querySelector('nav')
  nav.classList.toggle('flex-active')
}

document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('projectList')
  const projects = [
    {
      name: 'INDEX PAGE',
      description:
        'BOW DATA의 시작 페이지 입니다. 다른 페이지들을 설명하고 있습니다.',
      diff: 'js를 통해 갤러리처럼 페이지들을 설명해 굳이 스크롤하지 않아도 정보들을 확인할 수 있으며 일정 시간이 지나면 자동으로 넘어가 편리함을 추구했습니다.',
      img: './img/js_index.png',
    },
    {
      name: 'PEDIA PAGE',
      description: '다양한 견종의 정보를 얻을 수 있는 페이지 입니다.',
      diff: 'pedia page 입구 부분에서는  달 아이콘을 눌러 다크모드로 해당 페이지를 볼 수 있고, 강아지 소개 페이지에서는 js를 통해 박스를 불러내 같아보이지만 다른 페이지를 완성했습니다.',
      img: './img/js_pedia.png',
    },
    {
      name: 'DATA PAGE',
      description:
        '반려견과 관련된 퀴즈를 풀 수 있고, 관련 상식이나 도서등을 볼 수 있습니다.',
      diff: '강아지와 관련해 퀴즈를 풀고 제출을 하면, 유저의 점수를 alert를 통해 알려주는 기능을 사용했습니다.',
      img: './img/js_data.png',
    },
    {
      name: 'NEWS PAGE',
      description: '강아지와 관련된 뉴스들이 모여있습니다.',
      diff: '대표뉴스 부분을 만들어 뉴스의 링크를 띄우고 일정 시간이 지나면 다른 뉴스의 링크로 넘어가게해 발전시켰습니다.',
      img: './img/js_news.png',
    },
    {
      name: 'SUPPLIES PAGE',
      description: '반려견을 위한 용품들을 살 수 있는 페이지 입니다.',
      diff: 'js를 사용해 커서를 상품에 올리면 박스 그림자가 더 진해지는 모션을 넣어 발전시켰습니다. ',
      img: './img/js_supplies.png',
    },
    {
      name: 'TEAM PAGE',
      description:
        'BOW DATA 팀원에 대한 정보와 프로젝트에 대한 간략한 설명이 들어가 있습니다.',
      diff: '',
      img: './img/js_team.png',
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

    const projectDiff = document.createElement('p')
    projectDiff.textContent = project.diff

    const projectImage = document.createElement('img')
    projectImage.src = project.img
    projectImage.alt = `${project.name} image`
    projectImage.className = 'project-image'

    projectItem.appendChild(projectImage)
    projectItem.appendChild(projectTitle)
    projectItem.appendChild(projectDescription)
    projectItem.appendChild(projectDiff)

    return projectItem
  }

  projects.forEach((project) => {
    const projectElement = createProjectElement(project)
    projectList.appendChild(projectElement)
  })
})
