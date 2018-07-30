const util = require('util');
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
    },
    commands: [{
      /**
     * @function setAndVerifyKeyWordOrJobId
     * @description This function is used to set key word or job id
     * @param {string} keyValue Pass keyword to search
     * @return NA
     */
    setAndVerifyKeyWordOrJobId(keyValue) {
      
      this.setValue('@keyWordOrJobidInputSearchBox', keyValue);

      // Verifying the value is eneterd
      this.getValue('@keyWordOrJobidInputSearchBox', function (result) {
          this.assert.equal(result.value, keyValue);
      });
  },

  /**
   * @function selectOptionFromLocationDropDown
   * @description This function is used to select option from  Location drop down
   * @param {string} optionName Pass Option
   * @return NA
   */
  selectOptionFromLocationDropDown(optionName) {
    this.click('@locationDropDown');

      var dropDownOptions = util.format(this.elements.dropDownOption.selector, optionName);
      this.getLocationInView(dropDownOptions, function () {
        this.click(dropDownOptions);
      });
  },

  /**
   * @function verifySelectedLocationDropDownOption
   * @description This function is used to verify selected option from location drop down
   * @param {string} optionName Pass Option
   * @return NA
   */
  verifySelectedLocationDropDownOption(optionName) {
    this.getText('@locationDropDown', function (result) {
          this.assert.equal(result.value, optionName);
      });
  },

  /**
   * @function selectOptionFromSkillsDropDown
   * @description This function is used to select option from  Skill drop down
   * @param {string} optionName Pass Option
   * @return NA
   */
  selectOptionFromSkillsDropDown(optionName) {
    this.click('@skillDropDown');

      var dropDownOptions = util.format(this.elements.skillDropDownOption.selector, optionName);
      this.waitForElementVisible(dropDownOptions, 2000);
      this.click(dropDownOptions);
  },

  /**
   * @function verifySelectedSkillDropDownOption
   * @description This function is used to verify selected option from Skill drop down
   * @param {string} optionName Pass Option
   * @return NA
   */
  verifySelectedSkillDropDownOption(optionName) {
      var selectedOption = util.format(this.elements.selectedItemFromDropDown.selector, optionName);
      this.assert.visible(selectedOption);
  },

  /**
   * @function selectAndVerifyAllCheckBoxInLeftSideOfSkillDropDown
   * @description This function is used to select and verify all checkbox in left side of Skill drop down
   * @return NA
   */
  selectAndVerifyAllCheckBoxInLeftSideOfSkillDropDown(browser) {
    this.click('@skillDropDown');

    this.waitForElementVisible(this.elements.allcheckBoxFromFirstColumn.selector, 2000);

    browser.elements("css selector", this.elements.allcheckBoxFromFirstColumn.selector, function (result) {
          var allElements = result.value;
          allElements.forEach(function (ele) {
              // Selecting checkbox
              browser.elementIdClick(ele.ELEMENT);

              // Verifying checkbox is selected
              browser.elementIdSelected(ele.ELEMENT);
          });
      });
  },

  /**
   * @function verifyAllSelectedCheckBoxSkillsPresentInSearchResult
   * @description This function is used to select and verify all checkbox in left side of Skill drop down
   * @return NA
   */
  verifyAllSelectedCheckBoxSkillsPresentInSearchResult(browser) {
    browser.elements("css selector", this.elements.allcheckBoxFromFirstColumn.selector, function (result) {
          var allElements = result.value;
          allElements.forEach(function (ele) {
            browser.elementIdText(ele.ELEMENT, function (text) {
                  var selectedOption = util.format('span[data-value*="%s"]', text.value);
                  this.assert.visible(selectedOption);
              });
          });
      });
  },


  /**
   * @function clickOnFindButtonAndVerifySarchResultPageOpened
   * @description This function is used to click on find button and verify search result page opened
   * @return NA
   */
  clickOnFindButtonAndVerifySarchResultPageOpened() {
    this.click('@findButton');

      // Verifying search result page opened
      this.assert.visible('@searchResultReference');
  }
    }]
  };