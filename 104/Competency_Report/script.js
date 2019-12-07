var player1 = "Mario"
var player2 = "Yoshi"
var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;
var diceTotal = d1 + d2;

var damage= function(){

    document.getElementById("console").innerHTML = "You rolled "+diceTotal+".";
}

var attack = function(){

document.getElementById("console").innerHTML="<p>Attacked </p>"+ player2 +"<p> and hits for " +diceTotal+".";
}

var attack2 = function(){

    document.getElementById("console").innerHTML="<p>Attacked </p>" +player1;
    }

