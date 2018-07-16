class Utils {
    constructor() {

    }

    /**
 * @func scrollElementToVisibility
 * @description This function will be used to scroll the element so that it is visible on the screen. If the element is already visible it does nothing.
 * @param {string} elementReference Reference of element that has to get into visibility
 * @returns NA
 */
scrollElementToVisibility(browser, elementReference) {
    var scrollIntoView = function () {
      arguments[0].scrollIntoView();
    };
  
    browser.execute(scrollIntoView, elementReference);
  };
  
}

module.exports = new Utils();