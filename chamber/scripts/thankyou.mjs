const params = new URLSearchParams(window.location.search);

document.querySelector('#thank-first-name').textContent = `${params.get('firstName')}`;

document.querySelector('#thank-last-name').textContent = `${params.get('lastName')}`;

document.querySelector('#thank-email').textContent = `${params.get('email')}`;

document.querySelector('#thank-phone').textContent = `${params.get('phone')}`;

document.querySelector('#thank-organization-name').textContent = `${params.get('organizationName')}`;

document.querySelector('#thank-membership-level').textContent = `${params.get('membershipLevel')}`;

document.querySelector('#thank-timestamp').textContent = `${params.get('timestamp')}`;


