/*jslint nomen: true, sloppy: true, vars: true, plusplus: true, sub: true */
/*globals UIALogger: false */

#import "../../lib/tuneup_js/tuneup.js"

function PasswordScreen(target) {
    var self = this;
    var screenName = 'Password Screen';
    var app = target.frontMostApp();
    var window = app.mainWindow();
    var elements = window.elements()['Mobile Input'];
    var textFields = elements.textFields();
    var buttons = elements.buttons();
    var tableViews = window.tableViews()["Empty list"];
    //var tableView = window.tableViews()['Mobile Input']; 
   
    self.validate = function () {
      assertTrue(target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["A A, +91 9818739437"].isValid());
      assertTrue(target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["A A, +91 9818739437"].secureTextFields()[0].secureTextFields()[0].isValid(), 'hello');
  
    };

  self.setPassword = function (string) {
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["A A, +91 9818739437"].secureTextFields()[0].secureTextFields()[0].tap();
        app.keyboard().typeString(string);

    };

 };