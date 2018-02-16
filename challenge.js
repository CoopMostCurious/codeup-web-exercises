function firstProblem(number) {
    if (number > 13) {
        return number - 13;
    } else return (number * 2);
}
// ex should be 2 not 1

function secondProblem(string) {
    var testCase = string.toLowerCase();
    var wordToHave = 'san';
    var anotherWord = 'new';
    if ((testCase.includes(wordToHave)) || (testCase.includes(anotherWord))) {
        return string;
    } else return '';
}

function thirdProblem(start, finish) {
    var array = [];
    array.push(start);
    while (array[array.length - 1] !== finish) {
        array.push(start + 1);
        start++;
    }
    return array;
}

function fourthProblem(string) {
    return string.replace(/&/g, "&#38;").replace(/>/g, "&#62;").replace(/</g, "&#60;").replace(/"/g, "&#34;").replace(/'/g, "&#39;");
}