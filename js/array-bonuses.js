"use strict";

/*
=== Array Bonuses ===

1. Write a function called average(numbers) that takes in an array of numbers and returns the average

*/

function average(numbers) {
    if (Array.isArray(numbers)) {
        var total = 0;
        numbers.forEach(function(number) {
            total += number;
        });
        return total / (numbers.length);
    } else return false;
}

/*

2. Write a function called sumAll(numbers) that takes in an array of numbers and returns the sum of adding all of them.

*/

function sumAll(numbers) {
    if (Array.isArray(numbers)) {
        var total = 0;
        numbers.forEach(function(number) {
            total += number;
        });
        return total;
    } else return false;
}

/*

3. Write a function called max(numbers) that takes in an array of numberrs and returns the largest

*/
function max(numbers) {
    if (Array.isArray(numbers)) {
        var largest = 0;
        numbers.forEach(function(number) {
            if (number > largest) {
                largest = number;
            }
        });
        return largest;
    } else return false;
}
/*

4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest

5. Write a function called reverseArray(array) that takes in an array and returns the elements in reverse order

6. Write a function called randomElement(array) that takes in an array and returns a random element

7. Write a function called upperCaseAll(array) that takes in an array of strings and returns an array of uppercased strings.

8. Write a function called getOdds(array) that returns an array of only the odd numbers from an array of numbers.

9. Write a function called getEvens(array) that returns only the even numbers from an array of numbers

10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers

 */




