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
    for (var i =20; i>0; i--){
       if (i != 7 && i != 13) console.log(i);
    }
}

console.log("Hello World");
sayHello();
exc1();
exc2();