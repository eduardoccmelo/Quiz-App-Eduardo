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