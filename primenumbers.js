/*jslint node: true */

"use strict";

var fs = require('fs');
var outfile = "primenumbers.txt";
var out = "n";
var primeNumbersArray =[];
var j = 0;

var NUMBER_OF_PRIMES_TO_FOUND = 100;

function isPrime(number){
    var counter = 0;
    for(var i=1;i<=number;i+=1){
        if (number%i === 0){
            counter = counter + 1;
        }
    }
    if (counter === 2){
        console.log("Found prime number: " + number);
        primeNumbersArray.push(number);
    }

}

while(primeNumbersArray.length < NUMBER_OF_PRIMES_TO_FOUND){
    isPrime(j+=1);
}

console.log("Array length:" + primeNumbersArray.length);
console.log("Array :" + primeNumbersArray);

out = primeNumbersArray;
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
