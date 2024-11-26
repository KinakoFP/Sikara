// Données pour la météo actuelle
const todayWeather = {
    city: "Paris",
    temp: 18,
    condition: "Partiellement Ensoleillé",
    humidity: 65,
    wind: "15 km/h",
    icon: "fas fa-cloud-sun",
};

// Données des prévisions sur 7 jours
const weeklyWeather = [
    { day: "Lundi", temp: 18, condition: "Ensoleillé", icon: "fas fa-sun" },
    { day: "Mardi", temp: 16, condition: "Nuageux", icon: "fas fa-cloud" },
    { day: "Aujourd'hui", temp: 18, condition: "Partiellement Ensoleillé", icon: "fas fa-cloud-sun" },
    { day: "Jeudi", temp: 15, condition: "Pluie", icon: "fas fa-cloud-showers-heavy" },
    { day: "Vendredi", temp: 14, condition: "Orages", icon: "fas fa-bolt" },
    { day: "Samedi", temp: 12, condition: "Vent", icon: "fas fa-wind" },
    { day: "Dimanche", temp: 13, condition: "Neige", icon: "fas fa-snowflake" },
];

// Met à jour les informations de la météo du jour
function displayTodayWeather() {
    document.querySelector(".today-weather i").className = todayWeather.icon;
    document.getElementById("today-temp").textContent = `${todayWeather.temp}°C`;
    document.getElementById("today-condition").textContent = todayWeather.condition;
    document.getElementById("today-humidity").textContent = `${todayWeather.humidity}%`;
    document.getElementById("today-wind").textContent = todayWeather.wind;
}

// Affiche les prévisions pour les 7 jours
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

// Initialise l'affichage
document.addEventListener("DOMContentLoaded", () => {
    displayTodayWeather();
    displayWeeklyWeather();
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
  
    hamburger.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
  });
  
