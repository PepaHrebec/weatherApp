function postWeather(location, temp, tempFeel, describe, icon) {
  const locationDiv = document.querySelector(".location");
  const weatherImg = document.querySelector(".weatherImg");
  const tempDiv = document.querySelector(".currentTemp");
  const feelTemp = document.querySelector(".feelTemp");

  if (describe != "Err") {
    locationDiv.innerHTML = `${location}`;
    weatherImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    tempDiv.innerHTML = `${temp}`;
    feelTemp.innerHTML = `${tempFeel}`;
  } else {
    locationDiv.innerHTML = `Mars`;
    weatherImg.src = `https://cdn-icons-png.flaticon.com/512/124/124582.png`;
    tempDiv.innerHTML = `-65`;
    feelTemp.innerHTML = `-70`;
  }
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
