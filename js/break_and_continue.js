"use strict";

function skipNumber() {
    do {
        var numberToSkip = prompt('I can skip an odd number, 1 to 50 \(non-inclusive\). What number would you like to see me do that to?');
    } while ((numberToSkip % 2 === 0) || (typeof(parseInt(numberToSkip)) !== 'number'));
    for (var i = 1; i < 50; i++) {
        if ((i % 2 === 0) || (i === parseInt(numberToSkip))) {
            continue;
        } console.log('Here is a number: ' + i + '!');
    }
    alert('See? Looks for your number. It\'s not there. No worries, I\'ll wait...');
}