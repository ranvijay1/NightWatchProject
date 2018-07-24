const util = require('util');
class CareersPage {

    constructor() {
    }

    /**
     * @function setAndVerifyKeyWordOrJobId
     * @description This function is used to set key word or job id
     * @param {string} browser Pass browser;
     * @param {string} keyValue Pass keyword to search
     * @return NA
     */
    setAndVerifyKeyWordOrJobId(browser, keyValue) {
        var CareerPageLocators = browser.page.elementCareeresPage();
        CareerPageLocators.setValue('@keyWordOrJobidInputSearchBox', keyValue);

        // Verifying the value is eneterd
        CareerPageLocators.getValue('@keyWordOrJobidInputSearchBox', function (result) {
            this.assert.equal(result.value, keyValue);
        });
    }

    /**
     * @function selectOptionFromLocationDropDown
     * @description This function is used to select option from  Location drop down
     * @param {string} browser Pass browser;
     * @param {string} optionName Pass Option
     * @return NA
     */
    selectOptionFromLocationDropDown(browser, optionName) {
        var CareerPageLocators = browser.page.elementCareeresPage();
        CareerPageLocators.click('@locationDropDown');

        var dropDownOptions = util.format(CareerPageLocators.elements.dropDownOption.selector, optionName);
        CareerPageLocators.getLocationInView(dropDownOptions, function () {
            CareerPageLocators.click(dropDownOptions);
        });
    }

    /**
     * @function verifySelectedLocationDropDownOption
     * @description This function is used to verify selected option from location drop down
     * @param {string} browser Pass browser;
     * @param {string} optionName Pass Option
     * @return NA
     */
    verifySelectedLocationDropDownOption(browser, optionName) {
        var CareerPageLocators = browser.page.elementCareeresPage();
        CareerPageLocators.getText('@locationDropDown', function (result) {
            this.assert.equal(result.value, optionName);
        });
    }

    /**
     * @function selectOptionFromSkillsDropDown
     * @description This function is used to select option from  Skill drop down
     * @param {string} browser Pass browser;
     * @param {string} optionName Pass Option
     * @return NA
     */
    selectOptionFromSkillsDropDown(browser, optionName) {
        var CareerPageLocators = browser.page.elementCareeresPage();
        CareerPageLocators.click('@skillDropDown');

        var dropDownOptions = util.format(CareerPageLocators.elements.skillDropDownOption.selector, optionName);
        browser.waitForElementVisible(dropDownOptions, 2000);
        CareerPageLocators.click(dropDownOptions);
    }

    /**
     * @function verifySelectedSkillDropDownOption
     * @description This function is used to verify selected option from Skill drop down
     * @param {string} browser Pass browser;
     * @param {string} optionName Pass Option
     * @return NA
     */
    verifySelectedSkillDropDownOption(browser, optionName) {
        var CareerPageLocators = browser.page.elementCareeresPage();
        var selectedOption = util.format(CareerPageLocators.elements.selectedItemFromDropDown.selector, optionName);
        CareerPageLocators.assert.visible(selectedOption);
    }

    /**
     * @function selectAndVerifyAllCheckBoxInLeftSideOfSkillDropDown
     * @description This function is used to select and verify all checkbox in left side of Skill drop down
     * @param {string} browser Pass browser;
     * @return NA
     */
    selectAndVerifyAllCheckBoxInLeftSideOfSkillDropDown(browser) {
        var CareerPageLocators = browser.page.elementCareeresPage();
        CareerPageLocators.click('@skillDropDown');

        browser.waitForElementVisible(CareerPageLocators.elements.allcheckBoxFromFirstColumn.selector, 2000);

        browser.elements("css selector", CareerPageLocators.elements.allcheckBoxFromFirstColumn.selector, function (result) {
            var allElements = result.value;
            allElements.forEach(function (ele) {
                // Selecting checkbox
                browser.elementIdClick(ele.ELEMENT);

                // Verifying checkbox is selected
                browser.elementIdSelected(ele.ELEMENT);
            });
        });
    }

    /**
     * @function verifyAllSelectedCheckBoxSkillsPresentInSearchResult
     * @description This function is used to select and verify all checkbox in left side of Skill drop down
     * @param {string} browser Pass browser;
     * @return NA
     */
    verifyAllSelectedCheckBoxSkillsPresentInSearchResult(browser) {
        var CareerPageLocators = browser.page.elementCareeresPage();
        browser.elements("css selector", CareerPageLocators.elements.allcheckBoxFromFirstColumn.selector, function (result) {
            var allElements = result.value;
            allElements.forEach(function (ele) {
                browser.elementIdText(ele.ELEMENT, function (text) {
                    var selectedOption = util.format(CareerPageLocators.elements.selectedItemFromDropDown.selector, text.value);
                    CareerPageLocators.assert.visible(selectedOption);
                });
            });
        });
    }



    /**
     * @function clickOnFindButtonAndVerifySarchResultPageOpened
     * @description This function is used to click on find button and verify search result page opened
     * @param {string} browser Pass browser;
     * @return NA
     */
    clickOnFindButtonAndVerifySarchResultPageOpened(browser) {
        var CareerPageLocators = browser.page.elementCareeresPage();
        CareerPageLocators.click('@findButton');

        // Verifying search result page opened
        CareerPageLocators.assert.visible('@searchResultReference');
    }
}

module.exports = new CareersPage();