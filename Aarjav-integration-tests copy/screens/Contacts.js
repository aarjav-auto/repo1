
#import "../lib/tuneup_js/tuneup.js"

function ContactsScreen(target) {
    var self = this;
    var screenName = 'Contacts Screen';
    var app = target.frontMostApp();
    var window = app.mainWindow();
    var tabBar = app.tabBar();
    var buttons = tabBar().buttons();

    self.validate = function () {
        assertTrue(buttons.withName('Chats').isValid());
        assertTrue(buttons.withName('Groups').isValid());
        assertTrue(buttons.withName('Contacts').isValid());

    };


}