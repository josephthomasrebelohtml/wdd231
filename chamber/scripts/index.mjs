import { displayMembersCard } from "./index-members.mjs";
import { displayWeather, displayForecast } from "./weather.mjs";

const url = 'https://josephthomasrebelohtml.github.io/wdd231/chamber/data/members.json';
const cardsId = 'member-cards';

async function getMembersData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        const indexMembers = data.members.filter((member) => member.membershipLevel == 'Silver' || member.membershipLevel == 'Gold');
        displayMembersCard(indexMembers, cardsId);
    } catch (error) {
        console.error(error);
    }
}
getMembersData(url);

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=45.47&lon=-75.70&units=metric&appid=df68525d445bbb9ad92cf9bd8d7e5357";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=45.47&lon=-75.70&units=metric&appid=df68525d445bbb9ad92cf9bd8d7e5357";


async function getWeatherData(url,functionName) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            functionName(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

getWeatherData(weatherUrl,displayWeather);
// getWeatherData(forecastUrl);







