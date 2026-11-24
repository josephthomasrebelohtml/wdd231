const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Display Weather
export function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', `Icon for weather in ${data.name}`);
    captionDesc.innerHTML = `${data.weather[0].description}`;
    
}


//Display Forecast
export function displayForecast(data,daysInTheFuture,textId) {
    const futureDay = new Date();
    const futureDayText = document.querySelector(`#${textId}`);
    
    futureDay.setDate(futureDay.getDate() + daysInTheFuture);

    let completed = false;

    for (let index = 0; completed == false; index++) {
        const currentData = data.list[index];
        let currentTime = data.list[index].dt_txt;
        currentTime = currentTime.split(" ")[0];
        let currentMonth = currentTime.split("-")[1];
        let currentDay = currentTime.split("-")[2];

        // Determines the Day's temperature from 18:00 in the day and checks if the Day is right. 
        if (currentDay == futureDay.getDate() && data.list[index].dt_txt.split(" ")[1].includes("18")) {
            let temperature = currentData.main.temp;
            temperature = Math.round(temperature);
            futureDayText.innerHTML = `${currentMonth}/${currentDay} - ${temperature}&deg;C`
            
            if (temperature == 0) {
                futureDayText.innerHTML = `${currentMonth}/${currentDay} - 0&deg;C`
            }
            completed = true;
        }

        // Method to prevent any possible infinite loops
        if (index > 40) {
            completed = true
        }
    }
}