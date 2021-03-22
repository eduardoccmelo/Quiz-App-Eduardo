
import { cardsData } from "./lib/db.js";
import { createCard } from "./lib/card.js";

const content = document.querySelector(".page-main");

console.log(cardsData);
console.log(createCard);

for(let i = 0; i < cardsData.length; i++){
    const cardSection = createCard(cardsData[i]);
    content.append(cardSection);
}
