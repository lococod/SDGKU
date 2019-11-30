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

// console.log(sum2(2,5));

 var a=parseInt(5);
var b=parseInt(6);
var c=parseInt(6);
var d=parseInt(7);
var e=parseInt(1);

const sum3 = (a,b) => a+b;
let result= sum3(a,b);
console.log(result);


const multiplication = (a,b) =>a*b;
let result2 = multiplication(a,b);
console.log(result2);

const division = (a,b) =>a/b;
let result3 = division(a,b);
console.log(result3);

const subtract = (a,b) =>a-b;
let result4 = subtract(a,b);
console.log(result4);

const today = new Date();
let value = today;

let months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
console.table(months);
value = today.getMonth();
console.log(value);

const whatDay = new Date;
let daytoday = whatDay;

let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
console.table(days);
daytoday = whatDay.getDay();
console.log(daytoday);

const logged = false;
if(logged){
    console.log("Welcome to the system");
}
else{
    console.log("You have been denied");
}