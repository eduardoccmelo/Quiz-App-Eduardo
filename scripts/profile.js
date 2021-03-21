let darkMode = document.querySelector('.darkMode')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let selected = document.querySelector('.selected')
let questionBox = document.querySelectorAll(".page-main-content__question-box")

darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('lightMode')
    header.classList.toggle('darkModeHeaderFooter')
    main.classList.toggle('darkModeMain')
    footer.classList.toggle('darkModeHeaderFooter')
    selected.classList.toggle('darkMode_selected');
    for (let i = 0; i < questionBox.length; i++) {
      questionBox[i].classList.toggle("darkModeBox")
      }
    if (darkMode.innerHTML === '<i class="fas fa-moon"></i> Dark') {
      darkMode.innerHTML = '<i class="fas fa-sun"></i> Ligth'
    } else {
      darkMode.innerHTML = '<i class="fas fa-moon"></i> Dark'
    }
  })