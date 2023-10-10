let apiKey = "e7c3f78c726ad426f9c625c8e89326e7";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let temp = document.querySelector(".temp");
let cityName = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchBox = document.querySelector("#city-name");
let btn = document.querySelector("button");
let weatherCondition = document.querySelector(".condition");
let weatherBox = document.querySelector(".weather")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) { 
        document.querySelector(".error").style.display = "block"; 
        weatherBox.style.display = "none";
    }
    else {
        let data = await response.json();

        cityName.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherCondition.src = "./images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherCondition.src = "./images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherCondition.src = "./images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherCondition.src = "./images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherCondition.src = "./images/mist.png";
        }

        weatherBox.style.display = "block";
        document.querySelector(".error").style.display = "none"; 

    }
}

btn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
