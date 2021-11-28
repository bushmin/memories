const changeTexts = (texts, locale) => {
    for (const text of texts) {
        const element = document.getElementById(text[0]);
        if (!element) continue;

        if (LANGUAGE === 'ru' || locale === 'ru') {
            element.innerText = text[2];
        } else {
            element.innerText = text[1];
        }

    } 
}

const displayWorks = (works, locale) => {
    for (const work of works) {
        const root = document.getElementById('workholder');

        const details = document.createElement("details");
        details.classList.add('work__wrapper');
        const summary = document.createElement("summary");
        summary.classList.add('work__summary');
        const additional = document.createElement("div");
        additional.classList.add('work__additional');

        const header = document.createElement("div");
        header.innerText = work[0];
        header.classList.add('work__header');

        const subheader = document.createElement("div");
        if (LANGUAGE === 'ru' || locale === 'ru') {
            subheader.innerText = work[2];
        } else {
            subheader.innerText = work[1];
        }
        header.classList.add('work__subheader');

        const time = document.createElement("div");
        time.innerText = work[3];
        time.classList.add('work__time');

        const description = document.createElement("div");
        if (LANGUAGE === 'ru' || locale === 'ru') {
            description.innerText = work[6];
        } else {
            description.innerText = work[5];
        }
        description.classList.add('work__description');

        const link = document.createElement("a");
        link.innerText = work[4];
        link.classList.add('work__link');
        link.href = 'https://' + work[4];
        link.target = '_blank';

        summary.appendChild(header);
        summary.appendChild(subheader);
        summary.appendChild(time);
        additional.appendChild(description);
        additional.appendChild(link);
        details.appendChild(summary);
        details.appendChild(additional);

        root.appendChild(details);
    } 
}
( async() => {
    const [texts, works] = await Promise.all([
        getLocalFile(TEXT_URL),
        getLocalFile(WORKS_URL)
    ]);

    changeTexts(texts);
    displayWorks(works);
})()

const mouseCircle = document.getElementById('mouse-circle');
document.addEventListener('mousemove', function(e) {
    mouseCircle.style.left = e.x + 'px';
    mouseCircle.style.top = e.y + 'px';
});