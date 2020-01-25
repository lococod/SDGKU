console.log("hello node");

var express = require("express");
var app = express(); //create an app


app.get('/', (req, res) => {
    console.log("Someone wants the root page");
    res.send("Hello my friend!");
});


app.get('/contact', (req, res) => {
    console.log("Someone wants the contacts page");
    res.send("Hello my Contacts!");
});

app.get('/about', (req, res) => {
    console.log("Someone wants the about page");
    res.send("<h1 style='color:red;'>Donald Lococo</h1>");
});

app.get('/home', (req, res) => {
    console.log("Someone wants the home page");
    res.send("Hello my Homies!");
});

app.get('/FAQ', (req, res) => {
    console.log("Someone wants the faq page");
    res.send("Hello my FAQ!");
});

app.get('/exc/:message', (req, res) => {
    //console.log("Message from the client: ", req.params.message);

    // exc: find vowels

    var msj = req.params.message;
    var vowels = '';
    var vowel = ['a', 'e', 'i', 'o', 'u'];

    for (i = 0; i < msj.length; i++) {
        var letter = msj[i];
        //console.log(letter);
        if (vowel.indexOf(letter.toLowerCase()) != -1) {
            vowels += letter;
            
        }
        //return each vowel only once
        var uniquevowel = [new Set(vowels)];
    }
    res.status(202);
    res.send("Hello my exc message!");
    console.log(uniquevowel);
});


// API End Points





//Start Server



app.listen(8080, function () {
    console.log("Server running at http://localhost:8080");
    console.log("Press Ctrl+C to kill it");

});