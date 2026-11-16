const desiredNumberOfCards = 3;


export const displayMembersCard = (members, cardsId) => {
    const cards = document.querySelector(`#${cardsId}`);
    for (let index = 0; index < desiredNumberOfCards; index++) {
        const randomNumber = Math.floor(Math.random() * members.length);;
        const member = members[randomNumber];
        members.splice(randomNumber, 1)

        let memberCard = document.createElement('section');
        let businessName = document.createElement('h2');
        businessName.innerHTML = `${member.name}`

        let businessInfo = document.createElement('div');
        businessInfo.setAttribute('class', 'business-info')
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
        
    }
}