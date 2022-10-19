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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQVc7QUFDZixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQVc7QUFDZjtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDekJ0QjtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFVBQVUsZUFBZSxNQUFNOztBQUUzRTtBQUNBLGdFQUFnRSxTQUFTOztBQUV6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NxQjs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx5REFBVTtBQUNkLEdBQUc7QUFDSDs7QUFFc0I7Ozs7Ozs7VUNYdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDTjs7QUFFekMsc0RBQVU7QUFDViw0REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZmV0Y2hXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcG9zdFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9zdFdlYXRoZXIgfSBmcm9tIFwiLi9wb3N0V2VhdGhlclwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9OTk0N2RkYzk0OTA3NWJjMjdjMDA1MjI1NjdjYjU3ODVgXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjb25zdCB0ZW1wID0gKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkudG9QcmVjaXNpb24oMyk7XG4gICAgY29uc3QgdGVtcE1pbiA9ICh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpLnRvUHJlY2lzaW9uKDMpO1xuXG4gICAgcG9zdFdlYXRoZXIobG9jYXRpb24sIHRlbXAsIHRlbXBNaW4sIHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gIH0gY2F0Y2gge1xuICAgIGNvbnN0IHRlbXAgPSBcInVua25vd25cIjtcbiAgICBjb25zdCB0ZW1wTWluID0gXCJ1bmtub3duXCI7XG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gXCJFcnJcIjtcblxuICAgIHBvc3RXZWF0aGVyKGxvY2F0aW9uLCB0ZW1wLCB0ZW1wTWluLCB3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbiIsImZ1bmN0aW9uIHBvc3RXZWF0aGVyKGxvY2F0aW9uLCB0ZW1wLCB0ZW1wTWluLCBkZXNjcmliZSkge1xuICBjb25zdCBtYWluQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItYmxvY2tcIik7XG5cbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBEaXYuaW5uZXJIVE1MID0gYFRoZSB0ZW1wZXJhdHVyZSBpbiAke2xvY2F0aW9ufSBpcyBjdXJyZW50bHkgJHt0ZW1wfSBkZWdyZWVzIENlbHNpdXMuYDtcblxuICBjb25zdCBtaW5UZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWluVGVtcERpdi5pbm5lckhUTUwgPSBgVGhlIG1pbmltdW0gdGVtcGVyYXR1cmUgb2YgdG9kYXkgaXMgJHt0ZW1wTWlufSBkZWdyZWVzIENlbHNpdXMuYDtcblxuICBtYWluQmxvY2sucmVwbGFjZUNoaWxkcmVuKHRlbXBEaXYsIG1pblRlbXBEaXYpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGVzY3JpYmUoZGVzY3JpYmUpKTtcbn1cblxuZnVuY3Rpb24gd2VhdGhlckRlc2NyaWJlKHdlYXRoZXIpIHtcbiAgc3dpdGNoICh3ZWF0aGVyKSB7XG4gICAgY2FzZSBcIlRodW5kZXJzdG9ybVwiOlxuICAgICAgcmV0dXJuIFwiVGhlcmUncyBhIHRodW5kZXJzdG9ybSBvdXRzaWRlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRHJpenpsZVwiOlxuICAgICAgcmV0dXJuIFwiVGhlcmUncyBhIHNsaWdodCBkcml6emxlIG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJSYWluXCI6XG4gICAgICByZXR1cm4gXCJJdCdzIHJhaW5pbmcgb3V0c2lkZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlNub3dcIjpcbiAgICAgIHJldHVybiBcIkl0J3Mgc25vd2luZyBvdXRzaWRlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ2xlYXJcIjpcbiAgICAgIHJldHVybiBcIkl0J3MgYWxsIGNsZWFyIG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDbG91ZHNcIjpcbiAgICAgIHJldHVybiBcIkl0J3MgYSBiaXQgY2xvdWR5IG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJTYW5kXCI6XG4gICAgICByZXR1cm4gXCJUaGVyZSdzIHNhbmQgb3V0c2lkZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkVyclwiOlxuICAgICAgcmV0dXJuIFwiVGhlcmUncyBhIGh1Z2Ugc3Rvcm0gY29taW5nLCBiZXR0ZXIgaGlkZVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDogLy9nZW5lcmljIG1pc3RcbiAgICAgIHJldHVybiBcIkl0J3MgYSBiaXQgbWlzdHkgb3V0c2lkZVwiO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zdFdlYXRoZXIgfTtcbiIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9mZXRjaFdlYXRoZXJcIjtcblxuZnVuY3Rpb24gc3dpdGNoQ2l0eSgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hDaXR5XCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRDaXR5XCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGdldFdlYXRoZXIoaW5wdXQudmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgc3dpdGNoQ2l0eSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZmV0Y2hXZWF0aGVyLmpzXCI7XG5pbXBvcnQgeyBzd2l0Y2hDaXR5IH0gZnJvbSBcIi4vc3dpdGNoLmpzXCI7XG5cbnN3aXRjaENpdHkoKTtcbmdldFdlYXRoZXIoXCJQcmFndWVcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=