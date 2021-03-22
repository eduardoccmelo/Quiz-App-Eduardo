export function createCard(cardsData){
    const mainContent = document.createElement("div");
    mainContent.classList.add("page-main-content");

    const questionBox = document.createElement("div");
    questionBox.classList.add("page-main-content__question-box");
    mainContent.append(questionBox);

    const questionBoxContent = document.createElement("div");
    questionBoxContent.classList.add("page-main-content__question-box-content");
    questionBox.append(questionBoxContent);

    const questionBoxContentHeader = document.createElement("div");
    questionBoxContentHeader.classList.add("page-main-content__question-box-content__header");
    questionBoxContent.append(questionBoxContentHeader);

    const h2 = document.createElement("h2");
    h2.classList.add("question-box__title");
    h2.textContent = `Question ${cardsData.id + 1}:`
    questionBoxContentHeader.append(h2);

    const questionBoxQuestion = document.createElement("div");
    questionBoxQuestion.classList.add("question-box__question");
    questionBoxQuestion.textContent = `${cardsData.question}`
    questionBoxContent.append(questionBoxQuestion);

    const answer = document.createElement("div");
    answer.classList.add("question-box__answer");
    answer.textContent = "Show answer";
    questionBoxContent.append(answer);

    const answerHidden = document.createElement("div");
    answerHidden.classList.add("question-box__answerHidden");
    answerHidden.classList.add("isNotDisplayed");
    answerHidden.textContent = `${cardsData.answer}`
    questionBoxContent.append(answerHidden);

    answer.addEventListener('click', function () {
        answer.classList.toggle('isNotDisplayed')
        answerHidden.classList.toggle('isNotDisplayed')
    });
    answerHidden.addEventListener('click', function () {
        answerHidden.classList.toggle('isNotDisplayed')
        answer.classList.toggle('isNotDisplayed')
    });

    const questionBoxFooter = document.createElement("div");
    questionBoxFooter.classList.add("question-box__footer");
    questionBoxContent.append(questionBoxFooter);

    for(let i = 0; i < cardsData.options.length; i++){
        const options = document.createElement("div");
        options.classList.add("question-box__option");
        options.textContent = cardsData.options[i];
        questionBoxFooter.append(options);
        options.addEventListener("click", ()=>{
            if(options.textContent == answerHidden.textContent){
                options.classList.toggle("optionClicked")
              } 
        })
    }

    const bookmark = document.createElement("i");
    bookmark.classList.add("fas");
    bookmark.classList.add("fa-bookmark");
    bookmark.classList.add("question-box__bookmark");
    questionBox.append(bookmark);

    bookmark.addEventListener("click", ()=>{
        bookmark.classList.toggle("question-box__bookmark-clicked")
    })
    
    return mainContent;
}