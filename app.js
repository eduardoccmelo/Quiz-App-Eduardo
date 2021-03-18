let submit = document.querySelector('.submit')
let form = document.querySelector('form')
let mainPage = document.querySelector('.page-main')
let answer = document.querySelectorAll('.question-box__answer')
let option = document.querySelectorAll('.question-box__option')
let darkMode = document.querySelector('.darkMode')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let selected = document.querySelector('.selected')

for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener('click', function () {
    answer[i].classList.toggle('answerClicked')
  })
}

for (let i = 0; i < option.length; i++) {
  option[i].addEventListener('click', function () {
    if (option[i].textContent === answer.textContent) {
      alert('right')
    } else {
      alert('wrong')
    }
  })
}

darkMode.addEventListener('click', () => {
  darkMode.classList.toggle('lightMode')
  header.classList.toggle('darkModeHeaderFooter')
  main.classList.toggle('darkModeMain')
  footer.classList.toggle('darkModeHeaderFooter')
  selected.classList.toggle('darkMode_selected')
  if (darkMode.textContent === 'Ligth Mode') {
    darkMode.textContent = 'Dark Mode'
  } else {
    darkMode.textContent = 'Ligth Mode'
  }
})

// answer.addEventListenet('click', () => {
//   alert('answer!!!')
// })

// DRAFT FOR THE FORM
// form.addEventListener('submit', () => {
//   let newQuestion = document.createElement('div')
//   newQuestion.classList.add('page-main-content')
//   mainPage.append(newQuestion)
//   form.reset()
// })