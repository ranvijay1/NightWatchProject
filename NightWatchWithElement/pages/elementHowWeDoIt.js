module.exports = {
  elements: {
    contactUsButton: {
      selector: 'a[class*="button-ui "]',
    }
  },
  commands: [{
    /**
   * @function clickOnContactUsButton
   * @description This function is used to select Contact Us button
   * @param {string} browser Pass the browser
   * @return NA
   */
    clickOnContactUsButton() {
      return this.getLocationInView('@contactUsButton')
        .assert.visible('@contactUsButton')
        .click('@contactUsButton')
    }
  }]
};