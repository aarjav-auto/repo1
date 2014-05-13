
#import "../../lib/tuneup_js/tuneup.js"

function ProfilePicture(target) {
    var self = this;
    var screenName = 'Profile Picture';
    var app = target.frontMostApp();
    var window = app.mainWindow();
    var buttons = window().buttons();

    self.validate = function () {
        assertTrue(buttons.withName('Take a photo').isValid());
        assertTrue(buttons.withName('Choose photo').isValid());
        assertTrue(buttons.withName('Save').isValid());

    };

        self.skipProfilePicture = function (string) {
        navBar.rightButton().tap();            
    };

        self.noAccessScreen = function (string) {
        buttons()["Take a photo"].tap();        
        navBar.rightButton().tap();
    };
    
}