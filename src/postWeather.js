function postWeather(temp) {
  const mainBlock = document.querySelector(".weather-block");
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = `${temp}`;
  mainBlock.appendChild(tempDiv);
}

export { postWeather };
