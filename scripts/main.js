
import { cardsData } from "./lib/db.js";
import { createCard } from "./lib/card.js";

const content = document.querySelector(".page-main");

for(let i = 0; i < cardsData.length; i++){
    const cardSection = createCard(cardsData[i]);
    content.append(cardSection);
}
