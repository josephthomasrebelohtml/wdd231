const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=df68525d445bbb9ad92cf9bd8d7e5357";


async function getWeatherData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

getWeatherData();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', `Icon for weather in ${data.name}`);
    captionDesc.innerHTML = `${data.weather[0].description}`;
}