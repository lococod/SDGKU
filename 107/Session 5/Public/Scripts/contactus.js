//var serverURL = "http://restclass.azurewebsites.net/API/";
var serverURL = "http://localhost:8080/api/";

//object constructor
function Message(email,name,question) {
    this.email = email;
    this.name = name;
    this.question = question;

    this.user = "Donald";
}

function clearForm() {

    //clear input field
    $("#email").val("");
    $("#name").val("");
    $("#question").val("");


    //set focus
    $("#email").focus();
}


function saveMessage() {
    var email = $("#email").val();
    var name = $("#name").val();
    var question = $("#question").val();
 

    var theMessage = new Message(email,name,question);

    var jsonString = JSON.stringify(theMessage);
    //console.log(jsonString);
    //console.log(theItem);
    //  console.log("code:" + code + "description:" + description + "price:" + price + "category:" + category + "image:" + image + "stock:" + stock + "deliveryDays:" + deliveryDays);



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


// function testAjax() {
//     $.ajax({
//         url: serverURL + "test",
//         type: 'GET',
//         success: function (res) {
//             console.log("Server says:" + res);
//         },
//         error: function (err) {
//             console.log("error has occured:" + err);
//         }
//     });

//     console.log("below ajax req");
//     console.log("Waiting on Jax");
// }
function init() {
    //hook events
    $("#btnSave").click(saveMessage);

}

//when browser finishes loading all elements
window.onload = init;