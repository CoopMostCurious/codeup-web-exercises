function sayHello(name) { return "Hi " + name; }

function capitalizeThis(string) { return string[0].toUpperCase() + string.slice(1); }

function upperCase(string) { return string.toUpperCase(); }

function identity(input) { return typeof(input); }

function isOdd(number) { return (number % 2 !== 0); }

function isEven(number) { return (number % 2 == 0); }

function isPositive(number) { return (number > 0); }

function isNegative(number) { return (number < 0); }

function isBoolean(input) { return (typeof(input) === 'boolean'); }

function isTrue(boolean) {
    if (boolean === true) {
        return true
    } else return false;
}

function isFalse(boolean) {
    if (boolean === false) {
        return true
    }   else return false;
}

function isTruthy(input) {
    if (input == true) {
        return true;
    } else return false;
}

function isFalsey(input) {
    if (input == false) {
        return true;
    } else return false;
}

function isVowel(letter) {
    var toIgnoreCase = letter.toLowerCase();
    if (toIgnoreCase === 'a' || toIgnoreCase === 'e' || toIgnoreCase === 'i' || toIgnoreCase === 'o' || toIgnoreCase === 'u') {
        return true;
    } else return false;
}

function hasVowels(string) {
    var word = string.split('');
    var counter = word.length;
    while (counter > 0) {
        counter--;
        return isVowel(word[counter]);
    }
    return false;
}

function isConsonant(letter) {
    var toIgnoreCase = letter.toLowerCase();
    if (toIgnoreCase === 'a' || 'e' || 'i' || 'o' || 'u') {
        return false;
    } else return true;
}

function hasConsonants(string) {
    var word = string.split('');
    var counter = word.length;
    while (counter > 0) {
        counter--;
        return isConsonant(word[counter]);
    }
}

function isCapital(letter) {
    var validpattern = new RegExp('[A-Z]');
    var result = (letter.search(validpattern) + 1);
    if (result > 0) {
        return true;
    } else return false;
}

function hasCapitalLetters(string) {
    var validpattern = new RegExp('[A-Z]');
    var result = (letter.search(validpattern) + 1);
    if (result > 0) {
        return true;
    } else return false;
}

function isLowerCase(letter) {
    var validpattern = new RegExp('[a-z]');
    var result = (letter.search(validpattern) + 1);
    if (result > 0) {
        return true;
    } else return false;
}

function hasLowerCase(string) {
    var validpattern = new RegExp('[A-Z]');
    var result = (letter.search(validpattern) + 1);
    if (result > 0) {
        return true;
    } else return false;
}

function isSpace(letter) {
    var validpattern = new RegExp(' ');
    var result = (letter.search(validpattern) + 1);
    if (result > 0) {
        return true;
    } else return false;
}

function hasSpaces(string) {
    var validpattern = new RegExp(' ');
    var result = (letter.search(validpattern) + 1);
    if (result > 0) {
        return true;
    } else return false;
}

function isZero(number) {
    if (number === 0) {
        return true;
    } else false;
}

function increment(number) { return number + 1; }

function decrement(number) { return number - 1; }

function isFive(input) { return input === 5;}

function addFive(input) { return input + 5;}

function isMultipleOfFive(input) { return input % 5 === 0;}

function isThree(input) { return input === 3;}

function isMultipleOfThree(input) { return input % 3 === 0;}

function isMultipleOfThreeAndFive(input) { return (isMultipleOfThree(input) && isMultipleOfFive(input)); }

function lowerCase(string) { return string.toLowerCase()}

function capitalizeEachWord(string) { return string.replace(/\b\w/g, function(l){ return l.toUpperCase() });}

function add(a, b) { return a + b;}

function subtract(a, b) { return a - b;}

function multiply(a, b) { return a * b;}

function divide(a, b) { return a / b;}

function remainder(a, b) { return a % b;}

function isBlank(input) { return ((typeof(input) == 'string') && (input.indexOf(' ') > -1)); }

function isNumeric(input) { return typeof(input) === 'number'; }

function trimString(string) {
    var expression = /\b \b/gi;
    return (string.replace(expression, "")).trim();
}