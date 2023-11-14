/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   potentialMonthlyIncome: () => (/* binding */ potentialMonthlyIncome),
/* harmony export */   sushiCashIntoSalary: () => (/* binding */ sushiCashIntoSalary)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");


const potentialMonthlyIncome = (dailySalary) => {
    let storageMonthlyData = (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('potential monthly income');
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.removeFromLocalStorage)('potential monthly income')
    let total = 0;

    if (storageMonthlyData !== null) {
        total += storageMonthlyData.value;
    }

    total += dailySalary;
    console.log(total)

    ;(0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)('potential monthly income', total);
    return {
        total 
    }
}

const sushiCashIntoSalary = (cash) => {
    let dailySalary = cash * 0.025 + 750;
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(`daily income ${new Date()}`,dailySalary)
    return {dailySalary}
}



/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToLocalStorage: () => (/* binding */ addToLocalStorage),
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   removeFromLocalStorage: () => (/* binding */ removeFromLocalStorage)
/* harmony export */ });
function addToLocalStorage(key, value) {
    try {
        const timestamp = new Date().toISOString();

        const data = {
          value: value,
          timestamp: timestamp,
        };

        const serializedValue = JSON.stringify(data);
    
        localStorage.setItem(key, serializedValue);
    
        console.log(`Data with key "${key}" added to local storage.`);
    } catch (error) {
        console.error('Error adding data to local storage:', error);
    }
}

function getFromLocalStorage(key) {
    try {
      const serializedData = localStorage.getItem(key);
  
      if (serializedData === null) {
        return null;
      }
  
      const data = JSON.parse(serializedData);
  
      const storedValue = data.value;
      const storedTimestamp = data.timestamp;
  
      return { value: storedValue, timestamp: storedTimestamp };
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return null;
    }
}

function removeFromLocalStorage(key) {
    try {
      localStorage.removeItem(key);
  
      console.log(`Item with key "${key}" removed from local storage.`);
    } catch (error) {
      console.error('Error removing item from local storage:', error);
    }
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ "./src/factories.js");



let friday = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.sushiCashIntoSalary)(20000);
let sunday = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.sushiCashIntoSalary)(8000);


// I want to calculate potential salary incom
// I want to see my whole budget separatly in uah and dol
// To be able to see how much money people owe me
// keep track with my spendings
// planed or potential spendings
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdHO0FBQ2hHO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQW1CO0FBQ2hELElBQUksc0VBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBaUIsaUJBQWlCLFdBQVc7QUFDakQsWUFBWTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLElBQUk7QUFDMUMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxJQUFJO0FBQ3hDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nRztBQUN0QjtBQUMxRTtBQUNBLGFBQWEsK0RBQW1CO0FBQ2hDLGFBQWEsK0RBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYnVkZ2V0Ly4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9teS1idWRnZXQvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9teS1idWRnZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktYnVkZ2V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1idWRnZXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1idWRnZXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1idWRnZXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2UscmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHBvdGVudGlhbE1vbnRobHlJbmNvbWUgPSAoZGFpbHlTYWxhcnkpID0+IHtcclxuICAgIGxldCBzdG9yYWdlTW9udGhseURhdGEgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwb3RlbnRpYWwgbW9udGhseSBpbmNvbWUnKTtcclxuICAgIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoJ3BvdGVudGlhbCBtb250aGx5IGluY29tZScpXHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG5cclxuICAgIGlmIChzdG9yYWdlTW9udGhseURhdGEgIT09IG51bGwpIHtcclxuICAgICAgICB0b3RhbCArPSBzdG9yYWdlTW9udGhseURhdGEudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWwgKz0gZGFpbHlTYWxhcnk7XHJcbiAgICBjb25zb2xlLmxvZyh0b3RhbClcclxuXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSgncG90ZW50aWFsIG1vbnRobHkgaW5jb21lJywgdG90YWwpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3RhbCBcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3VzaGlDYXNoSW50b1NhbGFyeSA9IChjYXNoKSA9PiB7XHJcbiAgICBsZXQgZGFpbHlTYWxhcnkgPSBjYXNoICogMC4wMjUgKyA3NTA7XHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShgZGFpbHkgaW5jb21lICR7bmV3IERhdGUoKX1gLGRhaWx5U2FsYXJ5KVxyXG4gICAgcmV0dXJuIHtkYWlseVNhbGFyeX1cclxufVxyXG5cclxuZXhwb3J0IHtzdXNoaUNhc2hJbnRvU2FsYXJ5LHBvdGVudGlhbE1vbnRobHlJbmNvbWV9IiwiZnVuY3Rpb24gYWRkVG9Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkVmFsdWUgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplZFZhbHVlKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEYXRhIHdpdGgga2V5IFwiJHtrZXl9XCIgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZS5gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGRhdGEgdG8gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgXHJcbiAgICAgIGlmIChzZXJpYWxpemVkRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHNlcmlhbGl6ZWREYXRhKTtcclxuICBcclxuICAgICAgY29uc3Qgc3RvcmVkVmFsdWUgPSBkYXRhLnZhbHVlO1xyXG4gICAgICBjb25zdCBzdG9yZWRUaW1lc3RhbXAgPSBkYXRhLnRpbWVzdGFtcDtcclxuICBcclxuICAgICAgcmV0dXJuIHsgdmFsdWU6IHN0b3JlZFZhbHVlLCB0aW1lc3RhbXA6IHN0b3JlZFRpbWVzdGFtcCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmV0cmlldmluZyBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZTonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICBcclxuICAgICAgY29uc29sZS5sb2coYEl0ZW0gd2l0aCBrZXkgXCIke2tleX1cIiByZW1vdmVkIGZyb20gbG9jYWwgc3RvcmFnZS5gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGl0ZW0gZnJvbSBsb2NhbCBzdG9yYWdlOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQge2FkZFRvTG9jYWxTdG9yYWdlLGdldEZyb21Mb2NhbFN0b3JhZ2UscmVtb3ZlRnJvbUxvY2FsU3RvcmFnZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlLHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XHJcbmltcG9ydCB7IHN1c2hpQ2FzaEludG9TYWxhcnksIHBvdGVudGlhbE1vbnRobHlJbmNvbWUgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcclxuXHJcbmxldCBmcmlkYXkgPSBzdXNoaUNhc2hJbnRvU2FsYXJ5KDIwMDAwKTtcclxubGV0IHN1bmRheSA9IHN1c2hpQ2FzaEludG9TYWxhcnkoODAwMCk7XHJcblxyXG5cclxuLy8gSSB3YW50IHRvIGNhbGN1bGF0ZSBwb3RlbnRpYWwgc2FsYXJ5IGluY29tXHJcbi8vIEkgd2FudCB0byBzZWUgbXkgd2hvbGUgYnVkZ2V0IHNlcGFyYXRseSBpbiB1YWggYW5kIGRvbFxyXG4vLyBUbyBiZSBhYmxlIHRvIHNlZSBob3cgbXVjaCBtb25leSBwZW9wbGUgb3dlIG1lXHJcbi8vIGtlZXAgdHJhY2sgd2l0aCBteSBzcGVuZGluZ3NcclxuLy8gcGxhbmVkIG9yIHBvdGVudGlhbCBzcGVuZGluZ3MiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=