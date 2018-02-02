(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return (Math.PI * Math.sqrt(this.radius)); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                document.write("Area of a circle with radius: " + Math.round(this.radius) + ", is:\t" + Math.round(this.getArea())
                + '<br>');
            } else document.write("Area of a circle with radius:\t" + this.radius + ", is: " + this.getArea()
            + '<br>');
        }
    };

    // log info about the circle
    document.write("Raw circle information<br>");
    this.logInfo(false);
    document.write("Circle information rounded to the nearest whole number");
    this.logInfo(true);

    document.write('<hr>');
    // TODO: Change the radius of the circle to 5.

    this.radius = 5;
    // log info about the circle
    document.write("Raw circle information<br>");
    this.logInfo(false);
    document.write("Circle information rounded to the nearest whole number");
    this.logInfo(true);
})();
