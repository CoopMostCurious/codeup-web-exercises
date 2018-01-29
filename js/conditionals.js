"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function numberGame() {
    var numberTheyGuess = prompt("Hi, give me a number, and I'll tell you if it is even/odd, what it is plus 100, and if it negative or positive!");
    var numberAsInt = parseInt(numberTheyGuess);
    if (!isNaN(numberAsInt)) {
        (numberTheyGuess % 2 === 0) ? alert("Number is even!") : alert("Number is odd!");
        alert("Number with 100 added is " + (parseInt(numberTheyGuess) + 100) + "!");
        (numberTheyGuess > 0) ? alert("Number is positive!") : alert("Number is negative!");
    } else {
        alert('That is not even a number! No game for you!!');
        }
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/** Finished this part
 *
 * function analyzeColor(color) {
    if (color == 'red') {
        console.log('Something clever about red? Nope.');
    }
    else if (color == 'orange') {
        console.log('Something clever about red? Nope.');
    }
    else if (color == 'yellow') {
        console.log('Something clever about yellow? Nope.');
    }
    else if (color == 'green') {
        console.log('Something clever about green? Nope.');
    }
    else if (color == 'blue') {
        console.log('Something clever about blue? Nope.');
    }
    else if (color == 'indigo') {
        console.log('Something clever about indigo? Nope.');
    }
    else if (color == 'violet') {
        console.log('Something clever about violet? Nope.');
    }
    else console.log('Nope, not anything I am willing to deal with today. Bye!');
}

 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case 'red':
            alert('Something clever about red? Nope.');
            console.log('Something clever about red? Nope.');
            break;
        case 'orange':
            alert('Something clever about orange? Nope.');
            console.log('Something clever about orange? Nope.');
            break;
        case 'yellow':
            alert('Something clever about yellow? Nope.');
            console.log('Something clever about yellow? Nope.');
            break;
        case 'green':
            alert('Something clever about green? Nope.');
            console.log('Something clever about green? Nope.');
            break;
        case 'blue':
            alert('Something clever about blue? Nope.');
            console.log('Something clever about blue? Nope.');
            break;
        case 'indigo':
            alert('Something clever about indigo? Nope.');
            console.log('Something clever about indigo? Nope.');
            break;
        case 'violet':
            alert('Something clever about violet? Nope.');
            console.log('Something clever about violet? Nope.');
            break;
        default:
            alert('Nope, not anything I am willing to deal with today. Bye!');
            console.log('Nope, not anything I am willing to deal with today. Bye!');
            break;
    }
}

analyzeColor(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorTheyLike = prompt('What color do you like?');
analyzeColor(colorTheyLike);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 1: return (totalAmount - (totalAmount * 0.10)).toFixed(2);
        case 2: return (totalAmount - (totalAmount * 0.25)).toFixed(2);
        case 3: return (totalAmount - (totalAmount * 0.35)).toFixed(2);
        case 4: return (totalAmount - (totalAmount * 0.50)).toFixed(2);
        case 5: return (totalAmount - (totalAmount)).toFixed(2);
        default: return (totalAmount).toFixed(2);
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

console.log('If you had an order of $100, right now you could be paying: ' + calculateTotal(luckyNumber, 100));