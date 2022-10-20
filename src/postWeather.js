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
  const backgrnd = document.querySelector("body");
  switch (weather) {
    case "Thunderstorm":
      backgrnd.style.backgroundImage = "url('./../imgs/storm.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "There's a thunderstorm outside";
      break;
    case "Drizzle":
      backgrnd.style.backgroundImage = "url('./../imgs/rain.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "There's a slight drizzle outside";
      break;
    case "Rain":
      backgrnd.style.backgroundImage = "url('./../imgs/rain.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "It's raining outside";
      break;
    case "Snow":
      backgrnd.style.backgroundImage = "url('./../imgs/snow.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "It's snowing outside";
      break;
    case "Clear":
      backgrnd.style.backgroundImage = "url('./../imgs/clear.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "It's all clear outside";
      break;
    case "Clouds":
      backgrnd.style.backgroundImage = "url('./../imgs/cloudy.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "It's a bit cloudy outside";
      break;
    case "Sand":
      backgrnd.style.backgroundImage = "url('./../imgs/sand.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "There's sand outside";
      break;
    case "Err":
      backgrnd.style.backgroundImage = "url('./../imgs/mars.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "There's a huge storm coming, better hide";
      break;
    default: //generic mist
      backgrnd.style.backgroundImage = "url('./../imgs/mist.jpg')";
      backgrnd.style.backgroundSize = "cover";
      return "It's a bit misty outside";
      break;
  }
}

export { postWeather };
