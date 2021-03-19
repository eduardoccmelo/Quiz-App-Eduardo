let submit = document.querySelector('.submit')
let form = document.querySelector('.form')
let mainPage = document.querySelector('.page-main')
let answer = document.querySelectorAll('.question-box__answer')
let option = document.querySelectorAll('.question-box__option')
let darkMode = document.querySelector('.darkMode')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let selected = document.querySelector('.selected')
let questionBox = document.querySelectorAll(".page-main-content__question-box")
let textarea = document.querySelector("textarea");
let inputOption = document.querySelectorAll(".inputOption");
let inputTag = document.querySelector(".inputTags")
let checkedOption = document.querySelectorAll(".checkedOption");
let bookmark = document.querySelectorAll(".fa-bookmark ");
let answerHidden = document.querySelectorAll(".question-box__answerHidden")

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


// for (let i = 0; i < option.length; i++) {
//   option[i].addEventListener('click', function () {
//     if (option[i].textContent === answer.textContent) {
//       alert('right')
//     } else {
//       alert('wrong')
//     }
//   })
// }

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
    darkMode.innerHTML = '<i class="far fa-sun"></i> Ligth'
  } else {
    darkMode.innerHTML = '<i class="fas fa-moon"></i> Dark'
  }
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Your new question is:");
    console.log("---------------------");
    console.log(textarea.value);
    console.log("---------------------");
    for(let i = 0; i < inputOption.length; i++){
        console.log(`Option${i + 1}: ${inputOption[i].value}`);
    }
    console.log("---------------------");
    for(let i = 0; i < checkedOption.length; i++){
        if(checkedOption[i].checked === true){
            console.log(`Correct answer: Option #${i + 1}`);
        } 
    }
    console.log("---------------------");
    if(inputTag.value === ""){
        console.log("No Tags");
    } else{
        console.log(inputTag.value);
    }

    form.reset()
})

// answer.addEventListenet('click', () => {
//   alert('answer!!!')
// })


