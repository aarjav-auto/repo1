/*jslint nomen: true, sloppy: true, vars: true, plusplus: true, sub: true */
/*globals UIALogger: false */

#import "../../lib/tuneup_js/tuneup.js"


function FirstScreen(target) {
    var self = this;
    var screenName = 'First Screen';
    var app = target.frontMostApp();
    var window = app.mainWindow();
    var elements = window.elements()['Mobile Input'];
    var textFields = elements.textFields();
    var buttons = elements.buttons();
    var tableViews = window.tableViews()["Empty list"];
    var cells = tableViews.cells();

    self.validate = function () {
      assertTrue(elements.isValid());
      assertTrue(textFields.withName('First Name').isValid());
      assertTrue(textFields.withName('Last Name').isValid());
      assertTrue(textFields.withName('National Number').isValid());
      assertTrue(buttons.withName('Next').isValid());
    };

    self.setFirstName = function (string) {
    var textFields = elements.textFields()["First Name"];
      textFields.tap();
    app.keyboard().typeString(string);

    };

    self.setLastName = function (string) {
      var textFields = elements.textFields()["Last Name"];
      textFields.tap();
      app.keyboard().typeString(string);

    };

    self.setNumber = function (string) {
      var textFields = elements.textFields()["National Number"];
      textFields.tap();
        app.keyboard().typeString(string);


    };

    self.setCountryCode = function () {
        var buttons = elements.buttons()["International Code Button"];
        buttons.tap();
        tableViews.scrollToElementWithName("India (+91)").tap;
   };

   self.tapButton = function () {
   tapButton(buttons()["Next"], 'Next');
    };

}