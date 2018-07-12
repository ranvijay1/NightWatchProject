class CareersPage {
    constructor() {
    }

    /**
     * @function getKeyWordOrJobIdInputBox
     * @description This function is used to get the reference of keyword or job id input box
     * @return xpath of keyword input box
     */
    getKeyWordOrJobIdInputBox() {
        var xpathOfInputBox = '//*[contains(@class,"padding-normal section")]//*[normalize-space() = "Keyword or job ID"]/parent::label//input';
        return xpathOfInputBox;
    }

    /**
     * @function setKeyWordOrJobId
     * @description This function is used to set key word or job id
     * @param {string} browser Pass browser;
     * @param {string} keyValue Pass keyword to search
     * @return NA
     */
    setKeyWordOrJobId(browser, keyValue) {
        browser.useXpath().setValue(this.getKeyWordOrJobIdInputBox(), keyValue);
    }

    /**
     * @function getLocationDropDownReference
     * @description This function is used to get the reference of Locaion drop down
     * @return xpath of Location drop down
     */
    getLocationDropDownReference() {
        var xpathOfDropDown = '//*[contains(@class,"padding-normal section")]//div[contains(@id,"select-box-location")]';
        return xpathOfDropDown;
    }

    /**
     * @function selectOptionFromLocationDropDown
     * @description This function is used to select Location
     * @param {string} browser Pass browser;
     * @param {string} optionName Pass Option
     * @return NA
     */
    selectOptionFromLocationDropDown(browser, optionName) {
        var xpathOfDropDownOption = '//*[contains(@id,"select-box-location")]//li[normalize-space(.)="' + optionName + '"]';
        // Opening Location drop down
        browser.useXpath().click(this.getLocationDropDownReference());

        // Scrolling element for visibility
        Utils.scrollElementToVisibility(browser, xpathOfDropDownOption);
        // Selecting option from dropdown
        browser.useXpath().click(xpathOfDropDownOption);
    }

    /**
     * @function getSkillsDropDownReference
     * @description This function is used to get the reference of Skills drop down
     * @return xpath of Skill drop down
     */
    getSkillsDropDownReference() {
        var xpathOfDropDown = '//*[normalize-space() = "Skills"]/parent::*//*[@class="default-label"]';
        return xpathOfDropDown;
    }

    /**
     * @function getSelectedItemReference
     * @description This function is used to get the reference selected item from drop down
     * @param {string} optionName Name of option
     * @return xpath of selected item.
     */
    getSelectedItemReference(optionName) {
        var xpathOfSelectedItem = '//*[@class="selected-items"]//span[normalize-space(.)="' + optionName + '"]';
        return xpathOfSelectedItem;
    }

    /**
     * @function selectOptionFromSkillsDropDown
     * @description This function is used to select Skills
     * @param {string} browser Pass browser;
     * @param {string} optionName Pass Option
     * @return NA
     */
    selectOptionFromSkillsDropDown(browser, optionName) {
        var xpathOfDropDownOption = '//label[normalize-space(.)="' + optionName + '"]//span';
        // Opening Location drop down
        browser.useXpath().click(this.getSkillsDropDownReference());
        browser.pause(2000);

        // Selecting option from dropdown
        browser.useXpath().click(xpathOfDropDownOption);
        browser.pause(2000);
    }

    /**
     * @function getFindButtonReference
     * @description This function is used to get the reference of find button
     * @return xpath of contact us button
     */
    getFindButtonReference() {
        var xpathOfFindButton = '//button[normalize-space(.)="Find"][not(contains(@class,"header"))]';
        return xpathOfFindButton;
    }

    /**
     * @function clickOnFindButton
     * @description This function is used to select Find button
     * @param {string} browser Pass the browser
     * @return NA
     */
    clickOnFindButton(browser) {
        browser.useXpath().click(this.getFindButtonReference());
    }

     /**
     * @function getSearchResultReference
     * @description This function is used to get the reference search result
     * @return xpath of Search result
     */
    getSearchResultReference() {
        var xpathOfSearchResult = '//*[@class="search-result"]';
        return xpathOfSearchResult;
    }
}

module.exports = new CareersPage();