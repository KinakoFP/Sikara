// Exemple des prévisions météo sur 7 jours
const weeklyWeather = [
    { day: "Lundi", temp: 18, condition: "Ensoleillé", icon: "fas fa-sun" },
    { day: "Mardi", temp: 16, condition: "Nuageux", icon: "fas fa-cloud" },
    { day: "Mercredi", temp: 17, condition: "Partiellement Ensoleillé", icon: "fas fa-cloud-sun" },
    { day: "Jeudi", temp: 15, condition: "Pluie", icon: "fas fa-cloud-showers-heavy" },
    { day: "Vendredi", temp: 14, condition: "Orages", icon: "fas fa-bolt" },
    { day: "Samedi", temp: 12, condition: "Vent", icon: "fas fa-wind" },
    { day: "Dimanche", temp: 13, condition: "Neige", icon: "fas fa-snowflake" },
];

function displayWeeklyWeather() {
    const container = document.querySelector(".week-weather");
    container.innerHTML = ""; // Nettoie les cartes existantes

    weeklyWeather.forEach((dayWeather) => {
        const card = document.createElement("div");
        card.className = "weather-card";
        card.innerHTML = `
            <i class="${dayWeather.icon}"></i>
            <h3>${dayWeather.day}</h3>
            <p>${dayWeather.temp}°C</p>
            <p>${dayWeather.condition}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", displayWeeklyWeather);
