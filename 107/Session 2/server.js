console.log("hello node");

var express = require("express");
var app = express(); //create an app


app.get('/',(req, res) =>{
    console.log("Someone wants the root page");
    res.send("Hello my friend!");
});


app.get('/contact',(req, res) =>{
    console.log("Someone wants the contacts page");
    res.send("Hello my Contacts!");
});


app.listen(8080,function() {
console.log("Server running at http://localhost:8080");
console.log("Press Ctrl+C to kill it");

});