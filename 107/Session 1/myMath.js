module.exports = {
    funMath: function () {
        console.log("this is the math module");
    },
    sum: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    divide: function (num1, num2) {
        if (num2 == 0) {
            console.log("do not divide by 0");
            return 0;
        }
        return num1 / num2;
    },
    greater: function (num1, num2) {
        if (num1 > num2) {
            return num1;
        }
        else {
            return num2;
        }
    },
    lessThan: function (num1, num2) {
        if (num1 > num2) {
            return num2;
        }
        else {
            return num1;
        }
    },
    equalTo: function (num1, num2) {
        if (num1 == num2) {
            return "They are equal";
        }
        else {
            return "They are not equal";
        }
    },
    evenNumber: function (num) {
        if (num % 2 == 0) {
            return "Even Number";
        }
        return "Odd Number";

    }
};