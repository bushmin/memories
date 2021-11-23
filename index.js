const TEXT_URL = "./data/texts.csv";
const CARDS_URL = "./data/cards.csv";

const LANGUAGE = (navigator.language || navigator.userLanguage).split('-')[0];

fetch(TEXT_URL)
  .then((response) => response.text().then(textCallback));

fetch(CARDS_URL)
.then((response) => response.text().then(cardsCallback));

const textCallback = (data) => {
    const parsedData = CSVToArray(data);
    changeTexts(parsedData);
}

const cardsCallback = (data) => {
    const parsedData = CSVToArray(data);
    console.log(data, parsedData)
    displayCards(parsedData);
}

const changeTexts = (texts, locale) => {
    for (const text of texts) {
        const element = document.getElementById(text[0]);
        if (!element) continue;

        if (LANGUAGE === 'ru' && locale === 'ru') {
            element.innerText = text[2];
        } else {
            element.innerText = text[1];
        }

    } 
}

const displayCards = (cards) => {
    for (const card of cards) {
        const root = document.getElementById('cardholder');

        let element = document.createElement("a");
        if (LANGUAGE === 'ru') {
            element.innerText = card[3];
        } else {
            element.innerText = card[4];
        }
        element.href = `/${card[0]}`;

        root.appendChild(element);
        root.appendChild(document.createElement("br"));
        root.appendChild(document.createElement("br"));
        root.appendChild(document.createElement("br"));

    } 
}