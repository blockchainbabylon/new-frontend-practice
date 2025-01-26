const API_KEY = "YOUR_API_KEY";

const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);
    } catch(error) {
        weatherInfo.innerHTML = `<p style"color: red;">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather, wind } = data;

    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Temperature:</strong> ${main.temp}°C</p>
        <p><strong>Weather:</strong> ${main.humidity}%</p>
        <p><strong>WindSpeed:</strong> ${wind.speed} m/s</p>
    `;
}

getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.ariaValueMax.trim();

    if (city === "") {
        alert("Please enter a city name!");
        returns;
    }

    fetchWeather(city);
    cityInput.value = "";
});