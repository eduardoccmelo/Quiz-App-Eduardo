export function pushCard(sectionObject) {
  let sections;
  const storageSections = JSON.parse(localStorage.getItem("sections"));
  if (storageSections === null) {
    sections = [];
  } else {
    sections = storageSections;
  }

  sections.push(sectionObject);
  localStorage.setItem("sections", JSON.stringify(sections));
}

export function getCards() {
  let sections;
  const storageSections = JSON.parse(localStorage.getItem("sections"));
  if (storageSections === null) {
    sections = [];
  } else {
    sections = storageSections;
  }
  return sections;
}

// export const cardsData = [
//     {
//       id: 0,
//       question: "What is the population of Brazil?",
//       answer: "+200M",
//       isBookmarked: true,
//       options: ["+100M", "+150M", "+200M", "+250M"],
//     },
//     {
//       id: 1,
//       question: "What is the capital city of Australia?",
//       answer: "Canberra",
//       isBookmarked: true,
//       options: ["Sydney", "Perth", "Brisbane", "Canberra"],
//     },
//     {
//       id: 2,
//       question: "How many planets are there in the solar system?",
//       answer: "8",
//       isBookmarked: true,
//       options: ["7", "8", "9", "10"],
//     },
//     {
//       id: 3,
//       question: "Who has the most population in the world 2021?",
//       answer: "China",
//       isBookmarked: true,
//       options: ["India", "China", "USA", "Brazil"],
//     },
//     {
//       id: 4,
//       question:
//         "How many countries are there in Europe?",
//       answer: "44",
//       isBookmarked: false,
//       options: ["31", "39", "41", "44"],
//     },
//     {
//       id: 5,
//       question: "Which is the largest continent in the world?",
//       answer: "Asia",
//       isBookmarked: true,
//       options: ["America", "Europe", "Asia", "Africa"],
//     },
//     {
//       id: 6,
//       question: "How many countries are there in 2021?",
//       answer: "197",
//       isBookmarked: false,
//       options: ["187", "197", "207", "217"],
//     },
//     {
//       id: 7,
//       question: "What is the height of the Mount Everest?",
//       answer: "8.849m",
//       isBookmarked: false,
//       options: ["6.849m", "7.849m", "8.849m", "9.849m"],
//     },
//     {
//       id: 8,
//       question: "How many Fjords does Norway have?",
//       answer: "1190",
//       isBookmarked: false,
//       options: ["590", "790", "990", "1190"],
//     },
//     {
//       id: 9,
//       question: "What is the capital city of Canada?",
//       answer: "Ottawa",
//       isBookmarked: false,
//       options: ["Montreal", "Ottawa", "Toronto", "Quebec"],
//     },
//   ];