/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _postWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postWeather */ "./src/postWeather.js");


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

    (0,_postWeather__WEBPACK_IMPORTED_MODULE_0__.postWeather)(location, temp, tempMin, weatherDescription);
  } catch {
    const temp = "unknown";
    const tempMin = "unknown";
    const weatherDescription = "Err";

    (0,_postWeather__WEBPACK_IMPORTED_MODULE_0__.postWeather)(location, temp, tempMin, weatherDescription);
  }
}




/***/ }),

/***/ "./src/postWeather.js":
/*!****************************!*\
  !*** ./src/postWeather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postWeather": () => (/* binding */ postWeather)
/* harmony export */ });
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




/***/ }),

/***/ "./src/switch.js":
/*!***********************!*\
  !*** ./src/switch.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchCity": () => (/* binding */ switchCity)
/* harmony export */ });
/* harmony import */ var _fetchWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather */ "./src/fetchWeather.js");


function switchCity() {
  const btn = document.querySelector(".searchCity");
  const input = document.querySelector("#inputCity");

  btn.addEventListener("click", function () {
    (0,_fetchWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(input.value);
  });
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather.js */ "./src/fetchWeather.js");
/* harmony import */ var _switch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch.js */ "./src/switch.js");



(0,_switch_js__WEBPACK_IMPORTED_MODULE_1__.switchCity)();
(0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)("Prague");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQVc7QUFDZixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQVc7QUFDZjtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDekJ0QjtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFVBQVUsZUFBZSxNQUFNOztBQUUzRTtBQUNBLGdFQUFnRSxTQUFTOztBQUV6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRXFCOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHlEQUFVO0FBQ2QsR0FBRztBQUNIOztBQUVzQjs7Ozs7OztVQ1h0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNOOztBQUV6QyxzREFBVTtBQUNWLDREQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9mZXRjaFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9wb3N0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N3aXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3N0V2VhdGhlciB9IGZyb20gXCIuL3Bvc3RXZWF0aGVyXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD05OTQ3ZGRjOTQ5MDc1YmMyN2MwMDUyMjU2N2NiNTc4NWBcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IHRlbXAgPSAod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KS50b1ByZWNpc2lvbigzKTtcbiAgICBjb25zdCB0ZW1wTWluID0gKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkudG9QcmVjaXNpb24oMyk7XG5cbiAgICBwb3N0V2VhdGhlcihsb2NhdGlvbiwgdGVtcCwgdGVtcE1pbiwgd2VhdGhlckRlc2NyaXB0aW9uKTtcbiAgfSBjYXRjaCB7XG4gICAgY29uc3QgdGVtcCA9IFwidW5rbm93blwiO1xuICAgIGNvbnN0IHRlbXBNaW4gPSBcInVua25vd25cIjtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBcIkVyclwiO1xuXG4gICAgcG9zdFdlYXRoZXIobG9jYXRpb24sIHRlbXAsIHRlbXBNaW4sIHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuIiwiZnVuY3Rpb24gcG9zdFdlYXRoZXIobG9jYXRpb24sIHRlbXAsIHRlbXBNaW4sIGRlc2NyaWJlKSB7XG4gIGNvbnN0IG1haW5CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1ibG9ja1wiKTtcblxuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcERpdi5pbm5lckhUTUwgPSBgVGhlIHRlbXBlcmF0dXJlIGluICR7bG9jYXRpb259IGlzIGN1cnJlbnRseSAke3RlbXB9IGRlZ3JlZXMgQ2Vsc2l1cy5gO1xuXG4gIGNvbnN0IG1pblRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaW5UZW1wRGl2LmlubmVySFRNTCA9IGBUaGUgbWluaW11bSB0ZW1wZXJhdHVyZSBvZiB0b2RheSBpcyAke3RlbXBNaW59IGRlZ3JlZXMgQ2Vsc2l1cy5gO1xuXG4gIG1haW5CbG9jay5yZXBsYWNlQ2hpbGRyZW4odGVtcERpdiwgbWluVGVtcERpdik7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEZXNjcmliZShkZXNjcmliZSkpO1xufVxuXG5mdW5jdGlvbiB3ZWF0aGVyRGVzY3JpYmUod2VhdGhlcikge1xuICBjb25zdCBiYWNrZ3JuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBzd2l0Y2ggKHdlYXRoZXIpIHtcbiAgICBjYXNlIFwiVGh1bmRlcnN0b3JtXCI6XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi8uLi9pbWdzL3N0b3JtLmpwZycpXCI7XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICAgIHJldHVybiBcIlRoZXJlJ3MgYSB0aHVuZGVyc3Rvcm0gb3V0c2lkZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkRyaXp6bGVcIjpcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLy4uL2ltZ3MvcmFpbi5qcGcnKVwiO1xuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICByZXR1cm4gXCJUaGVyZSdzIGEgc2xpZ2h0IGRyaXp6bGUgb3V0c2lkZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlJhaW5cIjpcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLy4uL2ltZ3MvcmFpbi5qcGcnKVwiO1xuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICByZXR1cm4gXCJJdCdzIHJhaW5pbmcgb3V0c2lkZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlNub3dcIjpcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLy4uL2ltZ3Mvc25vdy5qcGcnKVwiO1xuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICByZXR1cm4gXCJJdCdzIHNub3dpbmcgb3V0c2lkZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsZWFyXCI6XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi8uLi9pbWdzL2NsZWFyLmpwZycpXCI7XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICAgIHJldHVybiBcIkl0J3MgYWxsIGNsZWFyIG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDbG91ZHNcIjpcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLy4uL2ltZ3MvY2xvdWR5LmpwZycpXCI7XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICAgIHJldHVybiBcIkl0J3MgYSBiaXQgY2xvdWR5IG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJTYW5kXCI6XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi8uLi9pbWdzL3NhbmQuanBnJylcIjtcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgICAgcmV0dXJuIFwiVGhlcmUncyBzYW5kIG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJFcnJcIjpcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLy4uL2ltZ3MvbWFycy5qcGcnKVwiO1xuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICByZXR1cm4gXCJUaGVyZSdzIGEgaHVnZSBzdG9ybSBjb21pbmcsIGJldHRlciBoaWRlXCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OiAvL2dlbmVyaWMgbWlzdFxuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vLi4vaW1ncy9taXN0LmpwZycpXCI7XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICAgIHJldHVybiBcIkl0J3MgYSBiaXQgbWlzdHkgb3V0c2lkZVwiO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zdFdlYXRoZXIgfTtcbiIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9mZXRjaFdlYXRoZXJcIjtcblxuZnVuY3Rpb24gc3dpdGNoQ2l0eSgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hDaXR5XCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRDaXR5XCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGdldFdlYXRoZXIoaW5wdXQudmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgc3dpdGNoQ2l0eSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZmV0Y2hXZWF0aGVyLmpzXCI7XG5pbXBvcnQgeyBzd2l0Y2hDaXR5IH0gZnJvbSBcIi4vc3dpdGNoLmpzXCI7XG5cbnN3aXRjaENpdHkoKTtcbmdldFdlYXRoZXIoXCJQcmFndWVcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=