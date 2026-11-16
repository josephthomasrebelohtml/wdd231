const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Dates 
const today = new Date();
const tomorrow = new Date()

export function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', `Icon for weather in ${data.name}`);
    captionDesc.innerHTML = `${data.weather[0].description}`;
    
}

export function displayForecast(data) {
    
}