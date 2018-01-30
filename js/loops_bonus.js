/*
Loops bonuses:

1. 99 bottles of beer on the wall song

2. Write a loop that starts and 1 and goes to 100.
- For multiples of 3, output the string "Fizz" instead of the number.
- For multiples of 5, output the string "Buzz" instead of the number.
- For multiples of both 3 and 5, output the string "FizzBuzz" instead of the number.
- For all other numbers, print the number.


3. Write code that prints all the fibonacci numbers under 1000.


4. Write code that prints all the prime numbers under 1000

Time to do this exercise, Cooper!

*/

function bottlesOfBeer() {
    for (var bottles = 100; bottles > 0; bottles--) {
        if (bottles === 1) {
            console.log('There is only one bottle of beer left');
            continue;
        }
    console.log(bottles + ' of beer on the wall')
    }
}

function fizzBuzz() {
    for (var i = 0; i > 101; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('FizzBuzz');
            continue;
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        } console.log(i);
    }
}

function fibonacci(){
    var a = 1, b = 0, temp;

    while (b < 1000) {
        temp = a;
        a = a + b;
        b = temp;
        if (b > 1000) {
            continue;
        }
        console.log(b);
    }
}

/*
How does this function work? Glad you asked, this is from the original author from back in 2003

Quote:
You mean from one to 100? If you alter from for (i=2; i<=100; i++) to for
(i=2; i<=2000; i++) it will work up to 2000.

It starts with a loop from 2 to 100. The first check outputs a new line for
basically multiples of 100.

% is the remainder (modulo) operator, 3%3 = 0, 3%2 = 1 as is the remainder
if you take one multiple of 2 off. Basically it returns however many of the
second item fits in the second, and returns the difference. E.g. 103%2, so
50 2's fit into 100. And this leaves 3.

The next bit checks every number under this number to see if it divides into
the number. A prime can only be divided by itself and 1. So even numbers are
NEVER prime numbers as they divide by 2 to give a whole number. If the
number divides into the number, then sets it as NOT a prime, and breaks out
of the check. If the number IS a prime, then it outputs it.
 */


function findPrime() {
    for (var i = 2; i <= 1000; i++)
    {
        var prime = true;

        for (j = 2; j < i; j++)
        {
            if (i % j === 0)
            {
                prime = false;
                break
            }
        }

        if (prime) {
            console.log(i);
        }
    }
}
