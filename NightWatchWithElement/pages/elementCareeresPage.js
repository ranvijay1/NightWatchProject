module.exports = {
    elements: {
      keyWordOrJobidInputSearchBox: { 
        selector: '//*[contains(@class,"padding-normal section")]//*[normalize-space() = "Keyword or job ID"]/parent::label//input' ,
        locateStrategy: 'xpath' 
      },
      locationDropDown: { 
        selector: '//*[contains(@class,"padding-normal section")]//div[contains(@id,"select-box-location")]' ,
        locateStrategy: 'xpath' 
      },
      dropDownOption: {
          selector: '//*[contains(@id,"select-box-location")]//li[normalize-space(.)="Hyderabad"]',
          locateStrategy: 'xpath'
      },
      skillDropDown: {
          selector: '//*[normalize-space() = "Skills"]/parent::*//*[@class="default-label"]',
          locateStrategy: 'xpath'
      },
      skillDropDownOption: {
          selector: '//label[normalize-space(.)="Software Test Engineering"]//span',
          locateStrategy: 'xpath'
      },
      selectedItemFromDropDown: {
        selector: '//*[@class="selected-items"]//span[normalize-space(.)="Software Test Engineering"]',
        locateStrategy: 'xpath'
      },
      findButton: {
        selector: '//button[normalize-space(.)="Find"][not(contains(@class,"header"))]',
        locateStrategy: 'xpath'
      },
      searchResultReference: {
        selector: '//*[@class="search-result"]',
        locateStrategy: 'xpath'
      }
    }
  };