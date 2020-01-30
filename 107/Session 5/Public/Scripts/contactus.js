//var serverURL = "http://restclass.azurewebsites.net/API/";
var serverURL = "http://localhost:8080/api/";

//object constructor
function question(email,name,question) {
    this.email = email;
    this.name = name;
    this.question = question;

    this.user = "Donald";
}

function clearForm() {

    //clear input field
    $("#email").val("");
    $("#question").val("");
    $("#name").val("");


    //set focus
    $("#email").focus();
}


function saveQuestion() {
    var email = $("#email").val();
    var name = $("#name").val();
    var question = $("#question").val();


    var theQuestion = new Question(email,name,question);

    var jsonString = JSON.stringify(theQuestion);
 
    $.ajax({
        url: serverURL + "messages",
        type: "POST",
        data: jsonString,
        contentType: "application/json",
        success: function (response) {
            console.log("ITS WORKING!:" + response);
            clearForm();
            $("#alertSuccess").removeClass("hidden");
            setTimeout(function () {
                $("#alertSuccess").addClass("hidden");
            }, 3000);
        },
        error: function (errorDetails) {
            console.log("Error: " + errorDetails);
        }
    });
}



function init() {
    //hook events
    $("#btnSave").click(saveQuestion);
    console.log("saved");

}

//when browser finishes loading all elements
window.onload = init;