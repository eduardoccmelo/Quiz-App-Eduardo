
import { getCards } from "./lib/db.js";
import { createCard } from "./lib/card.js";

const content = document.querySelector(".page-main");

const data = getCards();

for(let i = 0; i < data.length; i++){
    const cardSection = createCard(data[i]);
    content.append(cardSection);
}
