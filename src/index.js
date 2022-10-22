import { getWeather } from "./fetchWeather.js";
import { switchCity } from "./switch.js";
import { switchUnit } from "./switchUnit.js";

switchUnit();
switchCity();
getWeather("Prague");
