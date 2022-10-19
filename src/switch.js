import { getWeather } from "./fetchWeather";

function switchCity() {
  const btn = document.querySelector(".searchCity");
  const input = document.querySelector("#inputCity");

  btn.addEventListener("click", function () {
    getWeather(input.value);
  });
}

export { switchCity };
