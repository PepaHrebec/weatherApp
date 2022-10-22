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
  const unit = document.querySelector(".unit");

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9947ddc949075bc27c00522567cb5785`
    );
    const weatherData = await response.json();
    const weatherDescription = weatherData.weather[0].main;
    const icon = weatherData.weather[0].icon;

    if (unit.innerHTML === "°C") {
      const temp = (weatherData.main.temp - 273.15).toPrecision(3);
      const tempFeel = (weatherData.main.feels_like - 273.15).toPrecision(3);
      (0,_postWeather__WEBPACK_IMPORTED_MODULE_0__.postWeather)(location, temp, tempFeel, weatherDescription, icon);
    } else {
      const temp = (weatherData.main.temp * 1.8 - 459.67).toPrecision(3);
      const tempFeel = (weatherData.main.feels_like * 1.8 - 459.67).toPrecision(
        3
      );
      (0,_postWeather__WEBPACK_IMPORTED_MODULE_0__.postWeather)(location, temp, tempFeel, weatherDescription, icon);
    }
  } catch {
    const weatherDescription = "Err";
    const icon = "10d";

    if (unit.innerHTML === "°C") {
      const temp = (208.15 - 273.15).toPrecision(3);
      const tempFeel = (203.15 - 273.15).toPrecision(3);
      (0,_postWeather__WEBPACK_IMPORTED_MODULE_0__.postWeather)(location, temp, tempFeel, weatherDescription, icon);
    } else {
      const temp = (208.15 * 1.8 - 459.67).toPrecision(3);
      const tempFeel = (203.15 * 1.8 - 459.67).toPrecision(3);
      (0,_postWeather__WEBPACK_IMPORTED_MODULE_0__.postWeather)(location, temp, tempFeel, weatherDescription, icon);
    }
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




/***/ }),

/***/ "./src/switchUnit.js":
/*!***************************!*\
  !*** ./src/switchUnit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchUnit": () => (/* binding */ switchUnit)
/* harmony export */ });
function switchUnit() {
  const unitBtn = document.querySelector(".switchUnit");

  unitBtn.addEventListener("click", () => {
    const tempDiv = document.querySelector(".currentTemp");
    const feelTemp = document.querySelector(".feelTemp");
    const unitDiv = document.querySelector(".unit");

    if (unitDiv.innerHTML === "°C") {
      tempDiv.innerHTML = (Number(tempDiv.innerHTML) * 1.8 + 32).toPrecision(3);
      feelTemp.innerHTML = (Number(feelTemp.innerHTML) * 1.8 + 32).toPrecision(
        3
      );
      unitDiv.innerHTML = "°F";
    } else {
      tempDiv.innerHTML = ((Number(tempDiv.innerHTML) - 32) / 1.8).toPrecision(
        3
      );
      feelTemp.innerHTML = (
        (Number(feelTemp.innerHTML) - 32) /
        1.8
      ).toPrecision(3);
      unitDiv.innerHTML = "°C";
    }
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
/* harmony import */ var _switchUnit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchUnit.js */ "./src/switchUnit.js");




(0,_switchUnit_js__WEBPACK_IMPORTED_MODULE_2__.switchUnit)();
(0,_switch_js__WEBPACK_IMPORTED_MODULE_1__.switchCity)();
(0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)("Prague");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQVc7QUFDakIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBVztBQUNqQjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQVc7QUFDakIsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNLHlEQUFXO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3hDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDLHlEQUF5RCxLQUFLO0FBQzlELDJCQUEyQixLQUFLO0FBQ2hDLDRCQUE0QixTQUFTO0FBQ3JDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RXFCOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHlEQUFVO0FBQ2QsR0FBRztBQUNIOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDWHRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFc0I7Ozs7Ozs7VUMzQnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNOO0FBQ0k7O0FBRTdDLDBEQUFVO0FBQ1Ysc0RBQVU7QUFDViw0REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZmV0Y2hXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcG9zdFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zd2l0Y2hVbml0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc3RXZWF0aGVyIH0gZnJvbSBcIi4vcG9zdFdlYXRoZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICBjb25zdCB1bml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0XCIpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9OTk0N2RkYzk0OTA3NWJjMjdjMDA1MjI1NjdjYjU3ODVgXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgY29uc3QgaWNvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbjtcblxuICAgIGlmICh1bml0LmlubmVySFRNTCA9PT0gXCLCsENcIikge1xuICAgICAgY29uc3QgdGVtcCA9ICh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpLnRvUHJlY2lzaW9uKDMpO1xuICAgICAgY29uc3QgdGVtcEZlZWwgPSAod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1KS50b1ByZWNpc2lvbigzKTtcbiAgICAgIHBvc3RXZWF0aGVyKGxvY2F0aW9uLCB0ZW1wLCB0ZW1wRmVlbCwgd2VhdGhlckRlc2NyaXB0aW9uLCBpY29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVtcCA9ICh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgKiAxLjggLSA0NTkuNjcpLnRvUHJlY2lzaW9uKDMpO1xuICAgICAgY29uc3QgdGVtcEZlZWwgPSAod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlICogMS44IC0gNDU5LjY3KS50b1ByZWNpc2lvbihcbiAgICAgICAgM1xuICAgICAgKTtcbiAgICAgIHBvc3RXZWF0aGVyKGxvY2F0aW9uLCB0ZW1wLCB0ZW1wRmVlbCwgd2VhdGhlckRlc2NyaXB0aW9uLCBpY29uKTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IFwiRXJyXCI7XG4gICAgY29uc3QgaWNvbiA9IFwiMTBkXCI7XG5cbiAgICBpZiAodW5pdC5pbm5lckhUTUwgPT09IFwiwrBDXCIpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSAoMjA4LjE1IC0gMjczLjE1KS50b1ByZWNpc2lvbigzKTtcbiAgICAgIGNvbnN0IHRlbXBGZWVsID0gKDIwMy4xNSAtIDI3My4xNSkudG9QcmVjaXNpb24oMyk7XG4gICAgICBwb3N0V2VhdGhlcihsb2NhdGlvbiwgdGVtcCwgdGVtcEZlZWwsIHdlYXRoZXJEZXNjcmlwdGlvbiwgaWNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlbXAgPSAoMjA4LjE1ICogMS44IC0gNDU5LjY3KS50b1ByZWNpc2lvbigzKTtcbiAgICAgIGNvbnN0IHRlbXBGZWVsID0gKDIwMy4xNSAqIDEuOCAtIDQ1OS42NykudG9QcmVjaXNpb24oMyk7XG4gICAgICBwb3N0V2VhdGhlcihsb2NhdGlvbiwgdGVtcCwgdGVtcEZlZWwsIHdlYXRoZXJEZXNjcmlwdGlvbiwgaWNvbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbiIsImZ1bmN0aW9uIHBvc3RXZWF0aGVyKGxvY2F0aW9uLCB0ZW1wLCB0ZW1wRmVlbCwgZGVzY3JpYmUsIGljb24pIHtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xuICBjb25zdCB3ZWF0aGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVySW1nXCIpO1xuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50VGVtcFwiKTtcbiAgY29uc3QgZmVlbFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxUZW1wXCIpO1xuXG4gIGlmIChkZXNjcmliZSAhPSBcIkVyclwiKSB7XG4gICAgbG9jYXRpb25EaXYuaW5uZXJIVE1MID0gYCR7bG9jYXRpb259YDtcbiAgICB3ZWF0aGVySW1nLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XG4gICAgdGVtcERpdi5pbm5lckhUTUwgPSBgJHt0ZW1wfWA7XG4gICAgZmVlbFRlbXAuaW5uZXJIVE1MID0gYCR7dGVtcEZlZWx9YDtcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbkRpdi5pbm5lckhUTUwgPSBgTWFyc2A7XG4gICAgd2VhdGhlckltZy5zcmMgPSBgaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMTI0LzEyNDU4Mi5wbmdgO1xuICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gYC02NWA7XG4gICAgZmVlbFRlbXAuaW5uZXJIVE1MID0gYC03MGA7XG4gIH1cblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGVzY3JpYmUoZGVzY3JpYmUpKTtcbn1cblxuZnVuY3Rpb24gd2VhdGhlckRlc2NyaWJlKHdlYXRoZXIpIHtcbiAgY29uc3QgYmFja2dybmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgc3dpdGNoICh3ZWF0aGVyKSB7XG4gICAgY2FzZSBcIlRodW5kZXJzdG9ybVwiOlxuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vLi4vaW1ncy9zdG9ybS5qcGcnKVwiO1xuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICByZXR1cm4gXCJUaGVyZSdzIGEgdGh1bmRlcnN0b3JtIG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJEcml6emxlXCI6XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi8uLi9pbWdzL3JhaW4uanBnJylcIjtcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgICAgcmV0dXJuIFwiVGhlcmUncyBhIHNsaWdodCBkcml6emxlIG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJSYWluXCI6XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi8uLi9pbWdzL3JhaW4uanBnJylcIjtcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgICAgcmV0dXJuIFwiSXQncyByYWluaW5nIG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJTbm93XCI6XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi8uLi9pbWdzL3Nub3cuanBnJylcIjtcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgICAgcmV0dXJuIFwiSXQncyBzbm93aW5nIG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDbGVhclwiOlxuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vLi4vaW1ncy9jbGVhci5qcGcnKVwiO1xuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICByZXR1cm4gXCJJdCdzIGFsbCBjbGVhciBvdXRzaWRlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQ2xvdWRzXCI6XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi8uLi9pbWdzL2Nsb3VkeS5qcGcnKVwiO1xuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICByZXR1cm4gXCJJdCdzIGEgYml0IGNsb3VkeSBvdXRzaWRlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU2FuZFwiOlxuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vLi4vaW1ncy9zYW5kLmpwZycpXCI7XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICAgIHJldHVybiBcIlRoZXJlJ3Mgc2FuZCBvdXRzaWRlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRXJyXCI6XG4gICAgICBiYWNrZ3JuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi8uLi9pbWdzL21hcnMuanBnJylcIjtcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgICAgcmV0dXJuIFwiVGhlcmUncyBhIGh1Z2Ugc3Rvcm0gY29taW5nLCBiZXR0ZXIgaGlkZVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDogLy9nZW5lcmljIG1pc3RcbiAgICAgIGJhY2tncm5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLy4uL2ltZ3MvbWlzdC5qcGcnKVwiO1xuICAgICAgYmFja2dybmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICByZXR1cm4gXCJJdCdzIGEgYml0IG1pc3R5IG91dHNpZGVcIjtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCB7IHBvc3RXZWF0aGVyIH07XG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZmV0Y2hXZWF0aGVyXCI7XG5cbmZ1bmN0aW9uIHN3aXRjaENpdHkoKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQ2l0eVwiKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0Q2l0eVwiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBnZXRXZWF0aGVyKGlucHV0LnZhbHVlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHN3aXRjaENpdHkgfTtcbiIsImZ1bmN0aW9uIHN3aXRjaFVuaXQoKSB7XG4gIGNvbnN0IHVuaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN3aXRjaFVuaXRcIik7XG5cbiAgdW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRUZW1wXCIpO1xuICAgIGNvbnN0IGZlZWxUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsVGVtcFwiKTtcbiAgICBjb25zdCB1bml0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0XCIpO1xuXG4gICAgaWYgKHVuaXREaXYuaW5uZXJIVE1MID09PSBcIsKwQ1wiKSB7XG4gICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IChOdW1iZXIodGVtcERpdi5pbm5lckhUTUwpICogMS44ICsgMzIpLnRvUHJlY2lzaW9uKDMpO1xuICAgICAgZmVlbFRlbXAuaW5uZXJIVE1MID0gKE51bWJlcihmZWVsVGVtcC5pbm5lckhUTUwpICogMS44ICsgMzIpLnRvUHJlY2lzaW9uKFxuICAgICAgICAzXG4gICAgICApO1xuICAgICAgdW5pdERpdi5pbm5lckhUTUwgPSBcIsKwRlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wRGl2LmlubmVySFRNTCA9ICgoTnVtYmVyKHRlbXBEaXYuaW5uZXJIVE1MKSAtIDMyKSAvIDEuOCkudG9QcmVjaXNpb24oXG4gICAgICAgIDNcbiAgICAgICk7XG4gICAgICBmZWVsVGVtcC5pbm5lckhUTUwgPSAoXG4gICAgICAgIChOdW1iZXIoZmVlbFRlbXAuaW5uZXJIVE1MKSAtIDMyKSAvXG4gICAgICAgIDEuOFxuICAgICAgKS50b1ByZWNpc2lvbigzKTtcbiAgICAgIHVuaXREaXYuaW5uZXJIVE1MID0gXCLCsENcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBzd2l0Y2hVbml0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9mZXRjaFdlYXRoZXIuanNcIjtcbmltcG9ydCB7IHN3aXRjaENpdHkgfSBmcm9tIFwiLi9zd2l0Y2guanNcIjtcbmltcG9ydCB7IHN3aXRjaFVuaXQgfSBmcm9tIFwiLi9zd2l0Y2hVbml0LmpzXCI7XG5cbnN3aXRjaFVuaXQoKTtcbnN3aXRjaENpdHkoKTtcbmdldFdlYXRoZXIoXCJQcmFndWVcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=