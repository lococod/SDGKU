// function sum()
// {
//     console.log(1+2);
// }

// const sum = function()
// {
//     console.log(1+2);
// }
// sum();


// (function(){
//     console.log(1+2);
// })()


// function sum(num1,num2){
//     console.log(num1+num2);
// }
// sum(2,2);

// (function(topic)
// {console.log("I am learning "+ topic)
// })('Javascript');


// const sum2 = function(a,b){
//     return a+b;
// }

// // console.log(sum2(2,5));

// var a = parseInt(5);
// var b = parseInt(6);
// var c = parseInt(6);
// var d = parseInt(7);
// var e = parseInt(1);

// const sum3 = (a, b) => a + b;
// let result = sum3(a, b);
// console.log(result);


// const multiplication = (a, b) => a * b;
// let result2 = multiplication(a, b);
// console.log(result2);

// const division = (a, b) => a / b;
// let result3 = division(a, b);
// console.log(result3);

// const subtract = (a, b) => a - b;
// let result4 = subtract(a, b);
// console.log(result4);

// const today = new Date();
// let value = today;

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// console.table(months);
// value = today.getMonth();
// console.log(value);

// const whatDay = new Date;
// let daytoday = whatDay;

// let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// console.table(days);
// daytoday = whatDay.getDay();
// console.log(daytoday);

// const logged = true;
// if (logged) {
//     console.log("Welcome to the system");
// } else {
//     console.log("You have been denied");
// }

// console.log(logged ? 'Welcome to the system' : 'You have been denied')

// let money = 500;
// let cart = 1700;
// let debitCard = 1000;
// if (money > cart) {
//     console.log("Payment Successful");
// } else if (money + debitCard > cart) {
//     console.log("You have paid with your Debit Card");
// } else
//     console.log("You do not have enough funds");


// //&& a= and

// let hour = 15;
// if (hour > 0 && hour <= 12) {
//     console.log("French");
// } else if (hour > 12 && hour <= 19) {
//     console.log("Spain");
// }

// var num1 = prompt("Enter in your Payment Method ");
// const method = num1;
// switch (method) {
//     case 'check':
//         console.log("check selected");
//         break;
//     case 'credit':
//         console.log("credit selected");
//         break;
//     case 'debit':
//         console.log("debit selected");
//         break;
//         default :
//         console.log("Default selected");
//         break;
// }


// for (let i=0;i<10; i++){
// console.log(`Number ${i}`);
// }

// const cart = ['product 1', 'product 2', 'product 3', 'product 4'];

// for (let i = 0; i <= 4; i++) {
//     console.log(`The product in the cart is: ${cart}`);
// }

let numbers = [3, 4, 6, 22, 8, 9, 17]
let currentGreatest = 0;
for (let i = 0; i < 7; i++) {
    if (numbers[i] > currentGreatest) {
        currentGreatest = numbers[i];
        
    }
    console.log(currentGreatest);
  
}

let currentLeast = currentGreatest
for (let i = 0; i < 7; i++) {
    if (numbers[i] < currentLeast) {
        currentLeast = numbers[i];
        
    }
    console.log(currentLeast);
  
}





console.log(Math.min.apply(null, numbers));
console.log(numbers.sort(function (a, b) {
    return a - b
}));