module.exports = {
    elements: {
      keyWordOrJobidInputSearchBox: { 
        selector: '[class*="padding-normal section"] input[class*="input job-search"]',
      },
      locationDropDown: { 
        selector: '[class*="padding-normal section"] [id*="select-box-location"]',
      },
      dropDownOption: {
          selector: '[id*="%s"]',
      },
      skillDropDown: {
          selector: '[class*="padding-normal section"] [class*="default-label"]',
      },
      skillDropDownOption: {
          selector: '[class*="padding-normal section"] label>[data-value*="%s"]+span',
      },
      selectedItemFromDropDown: {
        selector: 'span[data-value*="%s"]',
      },
      findButton: {
        selector: '[class*="padding-normal section"] button',
      },
      searchResultReference: {
        selector: '[class*="search-result"]',
      }
    }
  };