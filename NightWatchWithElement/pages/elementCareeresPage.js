module.exports = {
    elements: {
      keyWordOrJobidInputSearchBox: { 
        selector: '//*[contains(@class,"padding-normal section")]//input[contains(@class,"input job-search")]' ,
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
          selector: '//*[contains(@class,"padding-normal section")]//div[contains(@class,"default-label")]',
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
        selector: '//*[contains(@class,"padding-normal section")]//button',
        locateStrategy: 'xpath'
      },
      searchResultReference: {
        selector: '[class*="search-result"]',
      }
    }
  };