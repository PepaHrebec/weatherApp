function postWeather(location, temp, tempMin, describe) {
  const mainBlock = document.querySelector(".weather-block");

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = `The temperature in ${location} is currently ${temp} degrees Celsius.`;

  const minTempDiv = document.createElement("div");
  minTempDiv.innerHTML = `The minimum temperature of today is ${tempMin} degrees Celsius.`;

  mainBlock.replaceChildren(tempDiv, minTempDiv);
  console.log(weatherDescribe(describe));
}

function weatherDescribe(weather) {
  switch (weather) {
    case "Thunderstorm":
      return "There's a thunderstorm outside";
      break;
    case "Drizzle":
      return "There's a slight drizzle outside";
      break;
    case "Rain":
      return "It's raining outside";
      break;
    case "Snow":
      return "It's snowing outside";
      break;
    case "Clear":
      return "It's all clear outside";
      break;
    case "Clouds":
      return "It's a bit cloudy outside";
      break;
    case "Sand":
      return "There's sand outside";
      break;
    case "Err":
      return "There's a huge storm coming, better hide";
      break;
    default: //generic mist
      return "It's a bit misty outside";
      break;
  }
}

export { postWeather };
