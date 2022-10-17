async function getWeather() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9947ddc949075bc27c00522567cb5785`
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeather();
