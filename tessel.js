// Fake tessel implementation

var colors = require('colors/safe');

(function fakeTessel() {
    
    var leds = [
        { color: "bgGreen", name: "LED1" },
        { color: "bgBlue", name: "LED2" },
        { color: "bgRed", name: "Error"},
        { color: "bgYellow", name: "Conn"}
    ];
    
    function led(index, state) {
        var selected = leds[index];
        var backgroundColor = (state ? selected.color : "bgBlack");
        var foregroundColor = "white";
        
        // White on Yellow looks terrible...
        if (foregroundColor === "white" && backgroundColor === "bgYellow") {
            return colors["yellow"]["bold"]["bgBlack"](selected.name);
        }
        
        return colors[backgroundColor][foregroundColor](selected.name);
    }
    
    function log(what) {
        console.info(colors.cyan("T | " + what));   
    }
    
    var pin = function(ledIndex) {
        
        var ledState = false;
        
        return { 
            'output': function(value) {
                ledState = value; 
                log("Outputted " + value + " on " + led(ledIndex, value));
                return this; 
            },
            'toggle': function() {
                ledState = !ledState;
                log("Toggled " + led(ledIndex, ledState));
            } 
        }
    }; 
    
    exports.led = [
           pin(0),
           pin(1),
           pin(2),
           pin(3),
        ];    
})(); 