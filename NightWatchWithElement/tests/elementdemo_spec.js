require('./../pages/allPageObjects.js')
const util = require('util');

var obj = Data['menuTab'];
var pageObj = Data["pageName"];
var allTabName = ['@whatToDo', '@howWeDoIt', '@ourWork', '@insights', '@about', '@careers'];
var allPageName = [pageObj.whatWeDo, pageObj.howWeDoIt, pageObj.ourWork, pageObj.insights, pageObj.about, pageObj.careers];

module.exports = {
    tags: ['edemoEpam'],

    before: function (browser) {
        EpamMainPage.launchUrl(browser);
    },

    after: function (browser) {
        browser.end();
    },

    'Verifying if all tab is present in the epam main page': function (browser) {
        var EpamMainPageLocators = browser.page.elementEpamMainPage();
        allTabName.forEach(function (tabName) {
            EpamMainPageLocators.assert.visible(tabName);
        });
    },

    'Should select one by one tab and verifying correct tab opened': function (browser) {
        allTabName.forEach(function (tabName, index) {
            EpamMainPage.selectAndVerifyOpenPage(browser, tabName, allPageName[index]);
        });
    },

    'Should select "How We Do It" page': function (browser) {
        EpamMainPage.selectAndVerifyOpenPage(browser, '@howWeDoIt', pageObj.howWeDoIt);
    },

    'Should scroll and click on "Contact Us" button': function (browser) {
        HowWeDoItPage.clickOnContactUsButton(browser);
    },

    'Verifying Contact Us page opened': function (browser) {
        EpamMainPage.verifyPageOpened(browser, pageObj.contactUs);
    },

    'Should select "Careers" page': function (browser) {
        EpamMainPage.selectAndVerifyOpenPage(browser, '@careers', pageObj.careers);
    },

    'Should enter "Test Automation Engineer" in keyword searchbox and verifying the value entered': function (browser) {
        CareerPage.setAndVerifyKeyWordOrJobId(browser, 'Test Automation Engineer');
    },

    'Should select Hyderabad from Location drop down': function (browser) {
        CareerPage.selectOptionFromLocationDropDown(browser, 'Hyderabad');
    },

    'Verifying "Hyderabad" is selected in Location drop down': function (browser) {
        CareerPage.verifySelectedLocationDropDownOption(browser, 'Hyderabad');
    },

    'Should select Software Test Engineering from Skills drop down': function (browser) {
        CareerPage.selectOptionFromSkillsDropDown(browser, 'Software Test Engineering');
    },

    'Verifying "Software Test Engineering" is selected in Skills drop down': function (browser) {
        CareerPage.verifySelectedSkillDropDownOption(browser, 'Software Test Engineering');
    },

    'Should select Find button to search the job and verify search result page opened': function (browser) {
        CareerPage.verifySelectedSkillDropDownOption(browser);
    },

    'Select all check boxes from first column': function (browser) {
        CareerPage.selectAndVerifyAllCheckBoxInLeftSideOfSkillDropDown(browser);
    },

    'Should select Find button to search the job and verify search result page opened': function (browser) {
        CareerPage.clickOnFindButtonAndVerifySarchResultPageOpened(browser);
    },

    'Verifying all selected tag skills present in search result': function (browser) {
        CareerPage.verifyAllSelectedCheckBoxSkillsPresentInSearchResult(browser);
    },

};