class EpamMainPage {
    constructor() {
      }

    /**
     * @function launchUrl
     * @description This function is used to launch url
     * @param {string} browser Pass the browser
     * @return NA
     */
    launchUrl(browser) {
        var EpamMainPageLocators = browser.page.elementEpamMainPage();
        EpamMainPageLocators.navigate();
        browser.windowMaximize()
            .waitForElementVisible(EpamMainPageLocators.elements.bodyElement.selector, 2000);
    }

    /**
     * @function selectAndVerifyOpenPage
     * @description This function is used to select tab and verify the page is opened
     * @param {string} browser Pass the browser
     * @param {string} nameOfTab Pass name of tab.
     * @param {string} nameOfPage Pass name of page.
     * @return NA
     */
    selectAndVerifyOpenPage(browser, nameOfTab, nameOfPage) {
        var EpamMainPageLocators = browser.page.elementEpamMainPage();
         // Click on Tab
         EpamMainPageLocators.click(nameOfTab);

         // Verifying correct page opened
         EpamMainPageLocators.getText('@titleOfPage', function (result) {
             this.assert.equal(result.value, nameOfPage);
         });
    }

    /**
     * @function verifyPageOpened
     * @description This function is used to verify page opened
     * @param {string} browser Pass the browser
     * @param {string} nameOfPage Pass name of page
     * @return NA
     */
    verifyPageOpened(browser, nameOfPage) {
        var EpamMainPageLocators = browser.page.elementEpamMainPage();
        // Verifying correct page opened
        EpamMainPageLocators.getText('@titleOfPage', function (result) {
            this.assert.equal(result.value, nameOfPage);
        });
    }
}

module.exports = new EpamMainPage();