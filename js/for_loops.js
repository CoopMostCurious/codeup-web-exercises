"use strict";

function showMultiplicationTable(input) {
    for (var i = 0; i < 11; i++) {
        console.log(input + ' ' + 'x ' + i + ' = ' + (input * i));
    }
}

function randomNumberGame() {
    for (var i = 0; i < 11; i++) {
        var randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20; // looked up on MDN how to use min and max with Math.random
        if (randomNumber % 2 !== 0) {
            console.log('Ineration ' + i + ': ' + randomNumber + ' was the number, and it is odd');
        } else console.log('Ineration ' + i + ': ' + randomNumber + ' was the number, and it is even');
    }
}

function pyramidOfNumbers() {
    for (var i = 1; i < 11; i++) {
        var output = "";
        for (var j = 0; j < i; j++) {
            output = output + i + " ";
        }
        console.log(output);
    }
}

function from100To5ByFives() {
    for (var i = 100; i > 0; i = i - 5) {
        console.log(i);
    }
}