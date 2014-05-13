#import "../lib/tuneup_js/tuneup.js"
#import "../Screens/FirstScreen.js"
#import "../Screens/VerificationScreen.js"
#import "../Screens/ProfilePicture.js"
#import "../Screens/FeatureTour.js"

var target = UIATarget.localTarget();

UIATarget.onAlert = function (alert) {
    return true;
};

var tapButton = function (button, name) {
    if (!button.isEnabled()) {
        throw new AssertionException('Can\' tap button: ' + name);
    }
    button.tap();
};

var retryDefault = function (f) {
    retry(f, 5, 2);
    };

test("signup", function(target, app) {
 
var firstScreen = new FirstScreen(target);
    retryDefault(function () {
        firstScreen.validate();
    });
    firstScreen.setFirstName('Aarjav');
    firstScreen.setLastName('Jain');
    firstScreen.setNumber('9999999999');
    firstScreen.setCountryCode();
    tapButton(target.frontMostApp().mainWindow().elements()["Mobile Input"].buttons()["Next"], 'Next');


 var verificationScreen = new VerificationScreen(target);
    retryDefault(function () {
        verificationScreen.validate();
    });
    verificationScreen.setVeriCode('0000');

var profilePicture = new ProfilePicture(target);
    retryDefault(function () {
        profilePicture.validate();
    });
    profilePicture.noAccessScreen(); 
    profilePicture.skipProfilePicture();

var featureTour = new FeatureTour(target);
    retryDefault(function () {
        profilePicture.validate();
    });
    featureTour.skipFeatureTour(); 

});