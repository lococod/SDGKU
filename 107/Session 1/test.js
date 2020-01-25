var mathLib = require('./myMath');

function sayHello() {
    console.log("Hello, my name is Donald");
}

function exc1() {
    //print numbers from 1-10, except 7
    for (var i = 1; i < 11; i++) {
        if (i != 7) console.log(i);
    }

}

function exc2() {
    // print numbres from 20 to 1, except 7 and 13
    for (var i = 20; i > 0; i--) {
        if (i != 7 && i != 13) console.log(i);
    }
}

// console.log("Hello World");
// sayHello();
// exc1();
// exc2();

function homeWork() {
    //find smaller

    var numbers = [23, 45, 23, 56, 2, -34, 8, 1, -12, 2, 123, 9045, 546, 34, -123];
    var value = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < value) {
            value = numbers[i];
        }

    }
    console.log(value);


    //find bigger

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            value = numbers[i];
        }

    }
    console.log(value);

    //find sum of all
    var sumArray = 0
    for (var i = 0; i < numbers.length; i++) {
        sumArray += numbers[i];
    }
    console.log("Sum of all numbers:" + sumArray);


    //multiple them all
    var newValue = 1
    for (var i = 0; i < numbers.length; i++) {
        newValue = numbers[i] * newValue;
    }
    console.log("Product of the array is:" + newValue);



    //non positive

    var negativeArray = []
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeArray.push(numbers[i]);
        }

    }
    console.log("Negative Numbers:" + negativeArray);

    //print odd numbers
    var oddArray = []
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            oddArray.push(numbers[i]);
        }

    }
    console.log("Odd Numbers:" + oddArray);

}


mathLib.funMath();

var r1 = mathLib.sum(20, 20);
console.log("sum results: " + r1);
var r2 = mathLib.subtract(20, 21);
console.log("subtract results: " + r2);
var r3 = mathLib.multiply(20, 21);
console.log("multiple results: " + r3);
var r4 = mathLib.divide(20, 21);
console.log("divide results: " + r4);
var r5 = mathLib.greater(20, 21);
console.log("greater number: " + r5);
var r6 = mathLib.lessThan(20, 21);
console.log("lesser number: " + r6);
var r7 = mathLib.equalTo(20, 20);
console.log(r7);
var r8 = mathLib.evenNumber(20);
console.log(r8);

homeWork();