#import "../../lib/tuneup_js/tuneup.js"
#import "../Screens/FirstScreen.js"
#import "../Screesetbsns/PasswordScreen.js"
fgbxrbd

dbf

zdb
fdzfb
dbfdz


dfbzd
var target = UIATarget.localTarget();

UIATarget.onAlert = function (alert) {
    return true;
};

var tapButton = function (button, name) {
    if (!button.isEnabled()) {
        throw new AssertionException('Can\' tap button: ' + name);
    }
    button.tap();
};srtbset

var retryDefault = function (f) {
    retry(f, 5, 2);
    };
    xdfbsrbse
test("signin", function (target, app) {
 var firstScreen = new FirstScreen(target);
    retryDefault(function () {
        firstScreen.validate();
    });
    firstScreen.setFirstName('Aarjav');
    firstScreen.setLastName('Jain');
    firstScreen.setNumber('9818739437');
    firstScreen.setCountryCode();
    
    
var passwordScreen = new PasswordScreen(target);
    retryDefault(function () {
        passwordScreen.validate();
    });
    passwordScreen.setPassword('abc');
    passwordScreen.setPassword('Savoir11*');

});

