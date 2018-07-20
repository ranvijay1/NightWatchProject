require('./../pages/allPageObjects.js')
const util = require('util');

var obj = Data['menuTab'];
var pageObj = Data["pageName"];
var allTabName = ['@whatToDo', '@howWeDoIt', '@ourWork', '@insights', '@about', '@careers'];
var allPageName = [pageObj.whatWeDo, pageObj.howWeDoIt, pageObj.ourWork, pageObj.insights, pageObj.about, pageObj.careers];

module.exports = {
    tags: ['edemoEpam'],

    before: function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.navigate();
        browser.windowMaximize()
            .waitForElementVisible(EpamMainPage.elements.bodyElement.selector, 2000);
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
            // Click on Tab
            EpamMainPage.click(tabName);

            // Verifying correct page opened
            EpamMainPage.getText('@titleOfPage', function (result) {
                this.assert.equal(result.value, allPageName[index]);
            });
        });
    },

    'Should select "How We Do It" page': function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.click('@howWeDoIt');

        // Verifying if "How we Do It" page opened
        EpamMainPage.getText('@titleOfPage', function (result) {
            this.assert.equal(result.value, pageObj.howWeDoIt);
        });
    },

    'Should scroll and click on "Contact Us" button': function (browser) {
        var HowWeDoIt = browser.page.elementHowWeDoIt();
        HowWeDoIt.getLocationInView('@contactUsButton', function (result) {
            HowWeDoIt.click('@contactUsButton');
        });
    },

    'Verifying Contact Us page opened': function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        // Verifying correct page opened
        EpamMainPage.getText('@titleOfPage', function (result) {
            this.assert.equal(result.value, pageObj.contactUs);
        });
    },

    'Should select "Careers" page': function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.click('@careers');

        // Verifying if "How we Do It" page opened
        EpamMainPage.getText('@titleOfPage', function (result) {
            this.assert.equal(result.value, pageObj.careers);
        });
    },

    'Should enter "Test Automation Engineer" in keyword searchbox': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.setValue('@keyWordOrJobidInputSearchBox', 'Test Automation Engineer');
    },

    'Verifying if "Test Automation Engineer" enyered in keyword searchbox': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.getValue('@keyWordOrJobidInputSearchBox', function (result) {
            this.assert.equal(result.value, "Test Automation Engineer");
        });
    },

    'Should select Hyderabad from Location drop down': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.click('@locationDropDown');

        var dropDownOptions = util.format(CareerPage.elements.dropDownOption.selector, 'Hyderabad');
        CareerPage.getLocationInView(dropDownOptions, function () {
            CareerPage.click(dropDownOptions);
        });
    },

    'Verifying "Hyderabad" is selected in Location drop down': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.getText('@locationDropDown', function (result) {
            this.assert.equal(result.value, "Hyderabad");
        });
    },

    'Should select Software Test Engineering from Skills drop down': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.click('@skillDropDown');

        var dropDownOptions = util.format(CareerPage.elements.skillDropDownOption.selector, 'Software Test Engineering');
        browser.waitForElementVisible(dropDownOptions, 2000);
        CareerPage.getLocationInView(dropDownOptions, function () {
            CareerPage.click(dropDownOptions);
        });
    },

    'Verifying "Software Test Engineering" is selected in Skills drop down': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        var selectedOption = util.format(CareerPage.elements.selectedItemFromDropDown.selector, 'Software Test Engineering');
        CareerPage.assert.visible(selectedOption);
    },

    'Should select Find button to search the job': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.click('@findButton');
    },

    'Verifying if Search result page opened': function (browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.assert.visible('@searchResultReference');
    },

};