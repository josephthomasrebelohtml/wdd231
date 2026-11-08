const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
    } catch (error) {
        console.error(error);
    }
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let placeOfBirth = document.createElement('p');
        let dateOfBirth = document.createElement('p');


        placeOfBirth.innerHTML = `Place of Birth: ${prophet.birthplace}`;
        dateOfBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(placeOfBirth);
        card.appendChild(dateOfBirth);
        cards.appendChild(card);
    });
}