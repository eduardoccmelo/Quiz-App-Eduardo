let bookmark = document.querySelectorAll(".fa-bookmark ");
let answerHidden = document.querySelectorAll(".question-box__answerHidden")
let darkMode = document.querySelector('.darkMode')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let selected = document.querySelector('.selected')
let questionBox = document.querySelectorAll(".page-main-content__question-box")
let answer = document.querySelectorAll('.question-box__answer')
let option = document.querySelectorAll('.question-box__option')

for(let i = 0; i < bookmark.length; i++){
    bookmark[i].addEventListener("click", () => {
        bookmark[i].classList.toggle("question-box__bookmark-clicked")
    });
}


for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', function () {
      answer[i].classList.toggle('isNotDisplayed')
      answerHidden[i].classList.toggle('isNotDisplayed')
    })
    answerHidden[i].addEventListener('click', function () {
      answerHidden[i].classList.toggle('isNotDisplayed')
      answer[i].classList.toggle('isNotDisplayed')
    })
  }

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

for(let correctAnswer of answerHidden){
  // alert(correctAnswer.textContent)
  for(let i = 0; i < option.length; i++){
    option[i].addEventListener("click", ()=>{
      if(option[i].textContent === correctAnswer.textContent){
        option[i].classList.toggle("optionClicked")
      } 
    })
}
}
 


