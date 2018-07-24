module.exports = {
    elements: {
      keyWordOrJobidInputSearchBox: { 
        selector: 'input[class*="input job-search"]',
      },
      locationDropDown: { 
        selector: '[id*="select-box-location"]',
      },
      dropDownOption: {
          selector: '[id*="%s"]',
      },
      skillDropDown: {
          selector: '[class*="selected-params"]',
      },
      skillDropDownOption: {
          selector: '.checkbox-custom[data-value="%s"]+span',
      },
      selectedItemFromDropDown: {
        selector: 'span[data-value*="%s"]',
      },
      findButton: {
        selector: '.job-search__submit',
      },
      searchResultReference: {
        selector: '.search-result',
      },
      allcheckBoxFromFirstColumn: {
        selector: '.multi-select-column:nth-child(1) input+span',
      }
    }
  };