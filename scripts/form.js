import { pushCard } from "./lib/db.js";

let submit = document.querySelector('.submit');
let form = document.querySelector('.form');
let darkMode = document.querySelector('.darkMode');
let textarea = document.querySelector("textarea");
let inputOption = document.querySelectorAll(".inputOption");
let inputTag = document.querySelector(".inputTags");
let header = document.querySelector('header')
let main = document.querySelector('main')
let checkedOption = document.querySelectorAll(".checkedOption");
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

form.addEventListener('submit', (e) => {
    e.preventDefault();

  const newQuestion = textarea.value;
  const tag = inputTag.value;

  const option1 = form.option1.value;
  const option2 = form.option2.value;
  const option3 = form.option3.value;
  const option4 = form.option4.value;

  const options = [
    option1,
    option2,
    option3,
    option4
  ]

  let correctAnswer;
  const correctAnswerRadios = form["correct-answer"];
  for(let i = 0; i < correctAnswerRadios.length; i++){
    if(correctAnswerRadios[i].checked){
      correctAnswer = options[i]
    }
  }

  pushCard({
    question: newQuestion,
    tag: tag,
    isBookmarked: false,
    options,
    answer: correctAnswer
  })

  alert("New question created!")

  form.reset()
})

