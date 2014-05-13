
#import "../lib/tuneup_js/tuneup.js"

function VerificationScreen(target) {
    var self = this;
    var screenName = 'Verification Screen';
    var app = target.frontMostApp();
    var window = app.mainWindow();
    var tableViews = window.tableViews()["Verify Number"];


    var textFields = tableViews.cells()["Verification Code"].textFields();
    var buttons = tableViews.buttons();
    self.validate = function () {
        assertTrue(textFields.withName('Verification Code').isValid());
        assertTrue(buttons.withName('Resend Code').isValid());
        assertTrue(buttons.withName('Call now').isValid());
    };
   
        self.setVeriCode = function (string) {
        textFields()["Verification Code"].tap();
        app.keyboard().typeString(string);
        buttons()["Verify"].tap();
    };
        

}