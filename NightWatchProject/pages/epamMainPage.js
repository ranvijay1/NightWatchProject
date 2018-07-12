class EpamMainPage {
    constructor() {
      }

    /**
     * @function launchUrl
     * @description This function is used to launch url
     * @param {string} browser Pass the browser
     * @param {string} urlValue Pass url to open
     * @return NA
     */
    launchUrl(browser, urlValue) {
        browser.windowMaximize().url(urlValue).waitForElementVisible('body', 2000);
    }

    /**
     * @function getTabReference
     * @description This function is used to get the Tab reference
     * @param {string} nameOfTab Pass name of tab
     * @return Xpat of menu tab
     */
    getTabReference(nameOfTab) {
        var xpathOfTab = '//a[normalize-space() = "' + nameOfTab + '"]//ancestor::li[not(contains(@class,"collapsed"))]';
        return xpathOfTab;
    }

    /**
     * @function getPageReference
     * @description This function is used to get the page reference
     * @param {string} nameOfPage Pass name of page
     * @return Xpath of specific page
     */
    getPageReference(nameOfPage) {
        var xpathOfPage = '//h1[normalize-space() = "' + nameOfPage + '"]';
        return xpathOfPage;
    }

    /**
     * @function selectTab
     * @description This function is used to select tab
     * @param {string} browser Pass the browser
     * @param {string} nameOfTab Pass url to open
     * @return NA
     */
    selectTab(browser, nameOfTab) {
        browser.useXpath().click(this.getTabReference(nameOfTab));
    }

    /**
     * @function verifyTabIsPresent
     * @description This function is used to verify Tab is resent on main page
     * @param {string} browser Pass the browser
     * @param {string} nameOfTab Pass Tab name
     * @return NA
     */
    verifyTabIsPresent(browser, nameOfTab) {
        browser.useXpath().assert.visible(this.getTabReference(nameOfTab));
    }

    /**
     * @function verifyPageOpened
     * @description This function is used to verify opened page
     * @param {string} browser Pass the browser
     * @param {string} nameOfPage Pass page name
     * @return NA
     */
    verifyPageOpened(browser, nameOfPage) {
        browser.useXpath().assert.visible(this.getPageReference(nameOfPage));
    }
}

module.exports = new EpamMainPage();