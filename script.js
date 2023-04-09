// Define static weather data for New York
const weatherData = {
    icon: 'https://openweathermap.org/img/wn/04d.png',
    description: 'Cloudy',
    temperature: '17°C'
};

// Get DOM elements
const weatherIconElement = document.getElementById('weather-icon');
const weatherDescriptionElement = document.getElementById('weather-description');
const weatherTemperatureElement = document.getElementById('weather-temperature');

// Update weather information in DOM elements
weatherIconElement.src = weatherData.icon;
weatherDescriptionElement.textContent = weatherData.description;
weatherTemperatureElement.textContent = weatherData.temperature;

// Get DOM element
const utcTimeElement = document.getElementById('utc-time');

// Update UTC time with leading zero for single-digit hours and minutes
function updateUtcTime() {
    const currentDate = new Date();
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
    const utcTime = `${hours}:${minutes}:${seconds} UTC`;
    utcTimeElement.textContent = utcTime;
}

// Update UTC time initially and every 1 second
updateUtcTime();
setInterval(updateUtcTime, 1000); // Update every 1 second
