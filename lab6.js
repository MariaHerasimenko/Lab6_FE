const button = document.getElementById('button');
const request = document.getElementById('status');

button.addEventListener('click', () => {
    fetch('https://randomuser.me/api')
        .then((response) => response.json())
        .then((data) => display(data)).catch(error => request.innerText = error);
});

function display(data) {
    information = data['results'][0];

    profile = document.createElement('div');
    profile.setAttribute('id', 'profile');

    let image = document.createElement('img');
    image.src= information['picture']['large'];
    profile.appendChild(image);

    let cell = document.createElement('p')
    cell.innerText = `Cell: ${information.cell}`;
    profile.appendChild(cell);

    let country = document.createElement('p')
    country.innerText = `Country: ${information['location']['country']}`;
    profile.appendChild(country);

    let postcode = document.createElement('p');
    postcode.innerText = `Postcode: ${information['location']['postcode']}`;
    profile.appendChild(postcode);



    document.getElementById('user').appendChild(profile);
    request.innerText = 'Success!'
};