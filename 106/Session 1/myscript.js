function init (){

console.log("ToDo App working!");

var txt = document.getElementById("txtTest");
console.log(txt);
console.log(txt.value);


sayHello();
}

function sayHello(){
    console.log("Donald Lococo");
}



//when browser finishes loading all elements
window.onload = init;