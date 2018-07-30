require('./../pages/allPageObjects.js')

var obj = Data['menuTab'];
var pageObj = Data["pageName"];
var allTabName = ['@whatToDo', '@howWeDoIt', '@ourWork', '@insights', '@about', '@careers'];
var allPageName = [pageObj.whatWeDo, pageObj.howWeDoIt, pageObj.ourWork, pageObj.insights, pageObj.about, pageObj.careers];

module.exports = {
    tags: ['edemoEpam'],

    before: function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.launchUrl(browser);
    },

    after: function (browser) {
        browser.end();
    },

    'Verifying if all tab is present in the epam main page': function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        allTabName.forEach(function (tabName) {
            EpamMainPage.assert.visible(tabName);
        });
    },

    'Should select one by one tab and verifying correct tab opened': function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        allTabName.forEach(function (tabName, index) {
            EpamMainPage.selectAndVerifyOpenPage(tabName, allPageName[index]);
        });
    },

    'Should select "How We Do It" page': function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.selectAndVerifyOpenPage('@howWeDoIt', pageObj.howWeDoIt);
    },

    'Should scroll and click on "Contact Us" button': function (browser) {
        var HowWeDoItPage = browser.page.elementHowWeDoIt();
        HowWeDoItPage.clickOnContactUsButton();
    },

    'Verifying Contact Us page opened': function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.verifyPageOpened(pageObj.contactUs);
    },

    'Should select "Careers" page': function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.selectAndVerifyOpenPage('@careers', pageObj.careers);
    },

    'Should enter "Test Automation Engineer" in keyword searchbox and verifying the value entered': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.setAndVerifyKeyWordOrJobId('Test Automation Engineer');
    },

    'Should select Hyderabad from Location drop down': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.selectOptionFromLocationDropDown('Hyderabad');
    },

    'Verifying "Hyderabad" is selected in Location drop down': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.verifySelectedLocationDropDownOption('Hyderabad');
    },

    'Should select Software Test Engineering from Skills drop down': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.selectOptionFromSkillsDropDown('Software Test Engineering');
    },

    'Verifying "Software Test Engineering" is selected in Skills drop down': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.verifySelectedSkillDropDownOption('Software Test Engineering');
    },

    'Should select Find button to search the job and verify search result page opened': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.verifySelectedSkillDropDownOption();
    },

    'Select all check boxes from first column': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.selectAndVerifyAllCheckBoxInLeftSideOfSkillDropDown(browser);
    },

    'Should select Find button to search the job and verify search result page opened': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.clickOnFindButtonAndVerifySarchResultPageOpened();
    },

    'Verifying all selected tag skills present in search result': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.verifyAllSelectedCheckBoxSkillsPresentInSearchResult(browser);
    },

};