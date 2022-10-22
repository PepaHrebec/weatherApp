import { postWeather } from "./postWeather";

async function getWeather(location) {
  const unit = document.querySelector(".unit");

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9947ddc949075bc27c00522567cb5785`
    );
    const weatherData = await response.json();
    const weatherDescription = weatherData.weather[0].main;
    const icon = weatherData.weather[0].icon;

    if (unit.innerHTML === "°C") {
      const temp = (weatherData.main.temp - 273.15).toPrecision(3);
      const tempFeel = (weatherData.main.feels_like - 273.15).toPrecision(3);
      postWeather(location, temp, tempFeel, weatherDescription, icon);
    } else {
      const temp = (weatherData.main.temp * 1.8 - 459.67).toPrecision(3);
      const tempFeel = (weatherData.main.feels_like * 1.8 - 459.67).toPrecision(
        3
      );
      postWeather(location, temp, tempFeel, weatherDescription, icon);
    }
  } catch {
    const weatherDescription = "Err";
    const icon = "10d";

    if (unit.innerHTML === "°C") {
      const temp = (208.15 - 273.15).toPrecision(3);
      const tempFeel = (203.15 - 273.15).toPrecision(3);
      postWeather(location, temp, tempFeel, weatherDescription, icon);
    } else {
      const temp = (208.15 * 1.8 - 459.67).toPrecision(3);
      const tempFeel = (203.15 * 1.8 - 459.67).toPrecision(3);
      postWeather(location, temp, tempFeel, weatherDescription, icon);
    }
  }
}

export { getWeather };
