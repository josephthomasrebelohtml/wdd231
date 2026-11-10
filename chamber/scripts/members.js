// Member Cards Creator
const url = 'https://josephthomasrebelohtml.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#member-cards');

async function getMembersData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        
        displayMembersGrid(data.members);
    } catch (error) {
        console.error(error);
    }
    
}

getMembersData();

const displayMembersGrid = (members) => {
    cards.innerHTML = "";
    cards.classList.add('grid');
    members.forEach(member => {
        let memberCard = document.createElement('section');
        let businessName = document.createElement('h2');
        businessName.innerHTML = `${member.name}`
        
        let businessInfo = document.createElement('div');
        businessInfo.setAttribute('class','business-info')
        // Picture Anchor
        let pictureAnchorLink = document.createElement('a');
        pictureAnchorLink.setAttribute('href', member.website);
        pictureAnchorLink.setAttribute('target', member.website);
        // Picture
        let businessPicture = document.createElement('img');
        businessPicture.setAttribute('src', member.image);
        businessPicture.setAttribute('alt', `Logo of ${member.name}`);
        businessPicture.setAttribute('loading', 'lazy');
        pictureAnchorLink.appendChild(businessPicture);
        


        let businessContactInfo = document.createElement('div');
        businessContactInfo.setAttribute('class', 'business-contact')
        
        //Business Contact Elements
        let businessEmail = document.createElement('p');
        businessEmail.innerHTML = `<span>Phone Number:</span> ${member.phoneNumber}`

        let businessAddress = document.createElement('p');
        businessAddress.innerHTML = `<span>Address:</span> ${member.address}`

        let businessMembershipLevel = document.createElement('p');
        businessMembershipLevel.innerHTML = `<span>Membership Level:</span> ${member.membershipLevel}`

        let businessLink = document.createElement('a');
        businessLink.setAttribute('href', member.website);
        businessLink.setAttribute('target', member.website);
        businessLink.innerHTML = `Visit ${member.name}!`

        businessContactInfo.appendChild(businessEmail);
        businessContactInfo.appendChild(businessAddress);
        businessContactInfo.appendChild(businessMembershipLevel);
        businessContactInfo.appendChild(businessLink)
        
        businessInfo.appendChild(businessContactInfo);

        memberCard.appendChild(businessName);
        memberCard.appendChild(pictureAnchorLink)
        memberCard.appendChild(businessInfo);
        cards.appendChild(memberCard);

    });
}


// Filters

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

gridButton.addEventListener('click', () => {
    cards.classList.remove('list');
    cards.classList.add('grid');
});

listButton.addEventListener('click', () => {
    cards.classList.remove('grid');
    cards.classList.add('list');
});