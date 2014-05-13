
#import "../lib/tuneup_js/tuneup.js"

function FeatureTour(target) {
    var self = this;
    var screenName = 'Feature Tour';
    var app = target.frontMostApp();
    var window = app.mainWindow();
    var buttons = window.buttons();
    self.validate = function () {
        
    };
   
        self.skipFeatureTour = function (string) {
        buttons()["Skip tour and start chatting"].tap();
    };
        

}