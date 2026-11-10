// Member Cards Creator
const url = 'https://josephthomasrebelohtml.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#member-cards');


async function GetMembersData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.table(data.members);
        displayMembersGrid(data.members);
    } catch (error) {
        console.error(error);
    }
}

GetMembersData();

const displayMembersGrid = (members) => {
    members.forEach(member => {
        let memberCard = document.createElement('section');
        let businessName = document.createElement('h2');
        
        let businessPicture = document.createElement('img');
        businessPicture.setAttribute('src', member.image);
        let placeOfBirth = document.createElement('p');
        let dateOfBirth = document.createElement('p');
    });
}

// Filters