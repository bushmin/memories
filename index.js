const changeTexts = (texts, locale) => {
    for (const text of texts) {
        const element = document.getElementById(text[0]);
        if (!element) continue;

        if (LANGUAGE === 'ru' || locale === 'ru') {
            element.innerHTML = text[2];
        } else {
            element.innerHTML = text[1];
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
        element.href = WEBSITE_BASE + card[0];

        root.appendChild(element);
        root.appendChild(document.createElement("br"));
        root.appendChild(document.createElement("br"));
        root.appendChild(document.createElement("br"));

    } 
}
( async() => {
    const [texts, cards] = await Promise.all([
        getLocalFile(TEXT_URL),
        getLocalFile(CARDS_URL)
    ]);
    
    changeTexts(texts);
    //displayCards(cards);
})()

const mouseCircle = document.getElementById('mouse-circle');
document.addEventListener('mousemove', function(e) {
    mouseCircle.style.left = e.x + 'px';
    mouseCircle.style.top = e.y + 'px';
});