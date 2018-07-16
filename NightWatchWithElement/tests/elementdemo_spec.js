//require('./../pages/allPageObjects.js')

var obj = Data['menuTab'];
var pageObj = Data["pageName"];
var allTabName = ['@whatToDo', '@howWeDoIt', '@ourWork', '@insights', '@about', '@careers'];
var allPageName = ['@whatToDoPage', '@howWeDoItPage', '@ourWorkPage', '@insightsPage', '@aboutPage', '@careersPage'];

module.exports = {
    tags: ['edemoEpam'],
    
    before: function (browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();        
        EpamMainPage.navigate();
        browser.windowMaximize()
        .waitForElementVisible('body', 2000);

    },

    'Verifying if all tab is present in the epam main page': function(browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        allTabName.forEach(function(tabName) {
            EpamMainPage.assert.visible(tabName);
        });
    },

    'Should select one by one tab and verifying correct tab opened': function(browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        allTabName.forEach(function(tabName, index) {
            console.log(tabName);
            // Click on Tab
            EpamMainPage.click(tabName);

            // Verifying correct page opened
            EpamMainPage.assert.visible(allPageName[index]);
        });
    },

    'Should select "How We Do It" page': function(browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.click('@howWeDoIt');

        // Verifying if "How we Do It" page opened
        EpamMainPage.assert.visible('@howWeDoItPage');
    },

    'Should scroll and click on "Contact Us" button': function(browser) {
        var HowWeDoIt = browser.page.elementHowWeDoIt();
        Utils.scrollElementToVisibility(browser, '@contactUsButton');
        HowWeDoIt.click('@contactUsButton');
    },

    'Verifying Contact Us page opened': function(browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.assert.visible('@contactUsPage');
    },

    'Should select "Careers" page': function(browser) {
        var EpamMainPage = browser.page.elementEpamMainPage();
        EpamMainPage.click('@careers');

        // Verifying if "How we Do It" page opened
        EpamMainPage.assert.visible('@careersPage');
    },

    'Should enter "Test Automation Engineer" in keyword searchbox': function(browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.setValue('@keyWordOrJobidInputSearchBox', 'Test Automation Engineer');
    },

    'Verifying if "Test Automation Engineer" enyered in keyword searchbox': function(browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.getValue('@keyWordOrJobidInputSearchBox', function(result) {
            this.assert.equal(result.value, "Test Automation Engineer");
        });
    },

    'Should select Hyderabad from Location drop down': function(browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.click('@locationDropDown');

        Utils.scrollElementToVisibility(browser, '@dropDownOption');
        CareerPage.click('@dropDownOption');
    },

    'Verifying "Hyderabad" is selected in Location drop down': function(browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.getText('@locationDropDown',function(result) {
            this.assert.equal(result.value, "Hyderabad");
        });
    },

    'Should select Software Test Engineering from Skills drop down': function(browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.click('@skillDropDown');
        browser.pause(2000);

        CareerPage.click('@skillDropDownOption');
    },

    'Verifying "Software Test Engineering" is selected in Skills drop down': function(browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.assert.visible('@selectedItemFromDropDown');
    },

    'Should select Find button to search the job': function(browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.click('@findButton');
    },

    'Verifying if Search result page opened': function(browser) {
        var CareerPage = browser.page.elementCareeresPage();
        CareerPage.assert.visible('@searchResultReference');
    },

    after: function(browser) {
        browser.pause(2000);
        browser.end();
    }
 };