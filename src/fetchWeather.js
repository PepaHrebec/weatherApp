import { postWeather } from "./postWeather";

async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9947ddc949075bc27c00522567cb5785`
    );
    const weatherData = await response.json();

    console.log(weatherData);

    const weatherDescription = weatherData.weather[0].main;
    const temp = (weatherData.main.temp - 273.15).toPrecision(3);
    const tempMin = (weatherData.main.temp - 273.15).toPrecision(3);

    postWeather(location, temp, tempMin, weatherDescription);
  } catch {
    const temp = "unknown";
    const tempMin = "unknown";
    const weatherDescription = "Err";

    postWeather(location, temp, tempMin, weatherDescription);
  }
}

export { getWeather };
