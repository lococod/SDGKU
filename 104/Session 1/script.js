// alert("Hello World");
// console.log("Hello from the text.");
// prompt("Name: ");

// var x;
// x="Donald";
// let y;
// y="Don";



// console.log(x);
// x=33;
// console.log(x);
// console.log(y);
// console.time('Hello');
// console.timeEnd('Hello');

// // console.warn("Warning");

// var num1 = prompt("enter a number");
// var num2 = prompt("enter a second number");
// // // console.log(num1+num2);
// // console.log(num1*num2);
// // console.log(num1-num2);
// // console.log(num1/num2);

// // var sentence ="Cohort 6 is the best cohort ever ....";
// // console.log(sentence);

// // sentence=sentence.concat(" in the creation of the world");
// // console.log(sentence);
// // sentence=sentence.replace('best','worst');
// // console.log(sentence);

// var name = prompt("Please write your name");
// console.log(name);
// //document.getElementById('division').innerHTML="Welcome " + name;
// document.getElementById('division').innerHTML=`Welcome  ${name} `;

// var age = prompt("enter your age");
// document.getElementById('age').innerHTML=`You are ${age} years old `;
// document.getElementById('num1').innerHTML=`Num1 ${num1} `;
// document.getElementById('num2').innerHTML=`Num2 ${num2} `;
// document.getElementById('sum').innerHTML="Addition is : " + (parseInt(num1)+parseInt(num2)) ;
// document.getElementById('divide').innerHTML="Division is :" +(parseInt(num1)/parseInt(num2)) ;
// document.getElementById('subtract').innerHTML="Subtraction is: "+(parseInt(num1)-parseInt(num2)) ;
// document.getElementById('multiply').innerHTML="Multiplication results are: "+(parseInt(num1)*parseInt(num2)) ;

// console.log(age);

// var email=prompt("Please enter your email: ");

// for(var i=0;i<10;i++){
// console.log("Hello JS");
// }

// var n=email.includes("@");

// if(n=== false){

//     console.error('Please enter a real email!')
// }
// else{
//     console.log('Thank you!')
// }

// var x='5';
// if(x===5){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// if (num1>num2){
//     console.log("num1: "+num1+" is greater than num2: "+num2);
//     }
//     if(num1==num2){
//         console.log("They are equal");
//     }
//     if(num2>num1){
//         console.log("num2: "+num2+" is greater than num1: "+num1);
//     }

var num1 = prompt("Enter in your first number: ");
var num2 = prompt("Enter in your second number: ");
var num3 = prompt("Enter in your third number: ");
var num4 = prompt("Enter in your fourth number: ");
var num5 = prompt("Enter in your fifth number: ");
var num6 = prompt("Enter in your sixth number: ");

document.getElementById('num1').innerHTML = `Num1: ${num1} `;
document.getElementById('num2').innerHTML = `Num2: ${num2} `;
document.getElementById('num3').innerHTML = `Num3: ${num3} `;
document.getElementById('num4').innerHTML = `Num4: ${num4} `;
document.getElementById('num5').innerHTML = `Num5: ${num5} `;
document.getElementById('num6').innerHTML = `Num6: ${num6} `;
document.getElementById('num6').innerHTML = `Num6: ${num6} `;

let nums = [num1, num2, num3, num4, num5, num6];

var sum = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6);

var avg = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6))/nums.length;

document.getElementById('sum').innerHTML = `Sum: ${sum} `;
document.getElementById('avg').innerHTML = `Average: ${avg} `;

    alert("Sum is: "+sum);
    alert("Average is: " +avg);