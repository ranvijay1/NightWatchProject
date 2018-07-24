
class HowWeDoItPage {
    constructor() {
    }

    /**
     * @function clickOnContactUsButton
     * @description This function is used to select Contact Us button
     * @param {string} browser Pass the browser
     * @return NA
     */
    clickOnContactUsButton(browser) {
        var HowWeDoItLocators = browser.page.elementHowWeDoIt();
        HowWeDoItLocators.getLocationInView('@contactUsButton', function (result) {
            HowWeDoItLocators.click('@contactUsButton');
        });
    }
}

module.exports =  new HowWeDoItPage();