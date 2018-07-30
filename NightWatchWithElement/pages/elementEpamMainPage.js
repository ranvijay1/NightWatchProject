module.exports = {
    url: 'https://www.epam.com/',
    elements: {
        bodyElement: {
            selector: 'body',
        },
        whatToDo: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="what-we-do"]',
        },
        howWeDoIt: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="how-we-do-it"]',
        },
        ourWork: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="our-work"]',
        },
        insights: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="insights"]',
        },
        about: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="about"]',
        },
        careers: {
            selector: '[class*="top-navigation__link-wrapper"] >[href*="careers"]',
        },
        titleOfPage: {
            selector: '[class*="title"] >h1',
        },
    },
    commands: [ {

        /**
     * @function launchUrl
     * @description This function is used to open url
     * @return NA
     */
    launchUrl(browser) {
        this.navigate();
        browser.windowMaximize()
            .waitForElementVisible(this.elements.bodyElement.selector, 2000);
   },
    /**
     * @function selectAndVerifyOpenPage
     * @description This function is used to select tab and verify the page is opened
     * @param {string} nameOfTab Pass name of tab.
     * @param {string} nameOfPage Pass name of page.
     * @return NA
     */
    selectAndVerifyOpenPage(nameOfTab, nameOfPage) {
         // Click on Tab
         this.click(nameOfTab);

         // Verifying correct page opened
         this.getText('@titleOfPage', function (result) {
             this.assert.equal(result.value, nameOfPage);
         });
    },

    /**
     * @function verifyPageOpened
     * @description This function is used to verify page opened
     * @param {string} nameOfPage Pass name of page
     * @return NA
     */
    verifyPageOpened(nameOfPage) {
        // Verifying correct page opened
        this.getText('@titleOfPage', function (result) {
            this.assert.equal(result.value, nameOfPage);
        });
    }
    }]
};