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
    const tempFeel = (weatherData.main.feels_like - 273.15).toPrecision(3);
    const icon = weatherData.weather[0].icon;

    postWeather(location, temp, tempFeel, weatherDescription, icon);
  } catch {
    const temp = "unknown";
    const tempFeel = "unknown";
    const weatherDescription = "Err";
    const icon = "10d";

    postWeather(location, temp, tempFeel, weatherDescription, icon);
  }
}

export { getWeather };
