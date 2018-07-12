module.exports = {
    tags: ['google'],
    'Demo test Google' : function (browser) {
         browser 
         .url('http://www.google.com') // Go to a url
         .waitForElementVisible('body', 3000) // wait till page loads
         .assert.title('Google') // Make sure Site title matches
         .assert.visible('input[type=text]') 
       },
       'Demo test1': function(browser) {
        browser
        .setValue('.gsfi', 'Ran Vijay') // send values
        .pause(5000)
        .click('button[name=btnG]') // click on search box
        .pause(5000)
        .end();
       }
 };