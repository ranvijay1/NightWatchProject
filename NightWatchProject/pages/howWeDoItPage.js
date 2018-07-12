
class HowWeDoItPage {
    constructor() {
    }

    /**
     * @function getContactUsButtonReference
     * @description This function is used to get the Contact Us button Reference
     * @return xpath of contact us button
     */
    getContactUsButtonReference() {
        var xpathOfTab = '//*[normalize-space() = "Contact us"]/parent::a';
        return xpathOfTab;
    }

    /**
     * @function clickOnContactUsButton
     * @description This function is used to select Contact Us button
     * @param {string} browser Pass the browser
     * @return NA
     */
    clickOnContactUsButton(browser) {
        // Scrolling the page
        Utils.scrollElementToVisibility(browser, this.getContactUsButtonReference());
        browser.useXpath().click(this.getContactUsButtonReference());
    }
}

module.exports =  new HowWeDoItPage();