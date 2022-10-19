import { postWeather } from "./postWeather";

async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9947ddc949075bc27c00522567cb5785`
  );
  const weatherData = await response.json();
  const temp = (weatherData.main.temp - 273.15).toPrecision(3);
  console.log(weatherData);
  console.log(
    `The temperature in ${location} is currently ${temp} degrees Celsius.`
  );
  postWeather(
    `The temperature in ${location} is currently ${temp} degrees Celsius.`
  );
  console.log(
    `The minimum temperature of today is ${(
      weatherData.main.temp_min - 273.15
    ).toPrecision(3)} degrees Celsius.`
  );
}

export { getWeather };
