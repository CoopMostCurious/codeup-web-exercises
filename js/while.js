"use strict";

function countingInPairs() {
    var counter = 1; var result = 0;
    while (counter <= 16) {
        result = Math.pow(2, counter);
        console.log(result);
        counter = counter + 1;
    }
}

function keepSellingOrNot() {
    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    // This expression will generate a random number between 1 and 5
    do {
        var conesSoldInSingleSale = Math.floor(Math.random() * 5) + 1;
        allCones = allCones - conesSoldInSingleSale;
        console.log(conesSoldInSingleSale + ' cones sold just now! Only ' + allCones + ' left!');
    } while ((allCones > 0) && (allCones - conesSoldInSingleSale > 0));
    if (allCones - conesSoldInSingleSale < 0) {
        console.log('I cannot sell you ' + conesSoldInSingleSale + ' right now! I have ' + allCones + ' left!');
    } else console.log('Yay! All the cones are now sold!');
}

