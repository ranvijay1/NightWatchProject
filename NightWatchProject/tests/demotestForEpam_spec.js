require('./../pages/allPageObjects.js');

var obj = Data['menuTab'];
var pageObj = Data["pageName"];
var allTabName = [obj.whatWeDo, obj.howWeDoIt, obj.ourWork, obj.insights, obj.about, obj.careers];
var allPageName = [pageObj.whatWeDo, pageObj.howWeDoIt, pageObj.ourWork, pageObj.insights, pageObj.about, pageObj.careers];

module.exports = {
    tags: ['demoEpam'],
    
    before: function (browser) {        
        EpamMainPage.launchUrl(browser, 'https://www.epam.com/');
    },

    'Verifying if all tab is present in the epam main page': function(browser) {
        allTabName.forEach(function(tabName) {
            EpamMainPage.verifyTabIsPresent(browser, tabName);
        });
    },

    'Should select one by one tab and verifying correct tab opened': function(browser) {
        allTabName.forEach(function(tabName, index) {
            // Click on Tab
            EpamMainPage.selectTab(browser, tabName);

            // Verifying correct page opened
            EpamMainPage.verifyPageOpened(browser, allPageName[index]);
        });
    },

    'Should select "How We Do It" page': function(browser) {
        EpamMainPage.selectTab(browser, obj.howWeDoIt);

        // Verifying if "How we Do It" page opened
        EpamMainPage.verifyPageOpened(browser, pageObj.howWeDoIt);
    },

    'Should scroll and click on "Contact Us" button': function(browser) {
        HowWeDoItPage.clickOnContactUsButton(browser);
    },

    'Verifying Contact Us page opened': function(browser) {
        EpamMainPage.verifyPageOpened(browser, pageObj.contactUs);
    },

    'Should select "Careers" page': function(browser) {
        EpamMainPage.selectTab(browser, obj.careers);

        // Verifying if "Careers" page opened
        EpamMainPage.verifyPageOpened(browser, pageObj.careers);
    },

    'Should enter "Test Automation Engineer" in keyword searchbox': function(browser) {
        CareersPage.setKeyWordOrJobId(browser, "Test Automation Engineer");
    },

    'Verifying if "Test Automation Engineer" enyered in keyword searchbox': function(browser) {
        browser.getValue(CareersPage.getKeyWordOrJobIdInputBox(), function(result) {
            this.assert.equal(result.value, "Test Automation Engineer");
        });
    },

    'Should select Hyderabad from Location drop down': function(browser) {
        CareersPage.selectOptionFromLocationDropDown(browser, "Hyderabad");
    },

    'Verifying "Hyderabad" is selected in Location drop down': function(browser) {
        browser.getText(CareersPage.getLocationDropDownReference(),function(result) {
            this.assert.equal(result.value, "Hyderabad");
        });
    },

    'Should select Software Test Engineering from Skills drop down': function(browser) {
        CareersPage.selectOptionFromSkillsDropDown(browser, "Software Test Engineering");
    },

    'Verifying "Software Test Engineering" is selected in Skills drop down': function(browser) {
        browser.useXpath().assert.visible(CareersPage.getSelectedItemReference('Software Test Engineering'));
    },

    'Should select Find button to search the job': function(browser) {
        CareersPage.clickOnFindButton(browser);
    },

    'Verifying if Search result page opened': function(browser) {
        browser.useXpath().assert.visible(CareersPage.getSearchResultReference());
    },

    after: function(browser) {
        browser.pause(2000);
        browser.end();
    }
 };