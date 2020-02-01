//var serverURL = "http://restclass.azurewebsites.net/API/";
var serverURL = "http://localhost:8080/api/";
var messageList=[];

//object constructor
function Item(code, description, price, category, image, stock, deliveryDays) {
    this.code = code;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
    this.stock = stock;
    this.deliveryDays = deliveryDays;
    this.user = "Donald";
}

function clearForm() {

    //clear input field
    $("#code").val("");
    $("#description").val("");
    $("#price").val("");
    $("#category").val("");
    $("#image").val("");
    $("#stock").val("");
    $("#deliveryDays").val("");

    //set focus
    $("#code").focus();
}


function saveItem() {
    var code = $("#code").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var category = $("#category").val();
    var image = $("#image").val();
    var stock = $("#stock").val();
    var deliveryDays = $("#deliveryDays").val();

    var theItem = new Item(code, description, price, category, image, stock, deliveryDays);

    var jsonString = JSON.stringify(theItem);


    $.ajax({
        url: serverURL + "items",
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
//get messages
function fetchMessage() {


    //get items from server
    $.ajax({
        url: serverURL + "messages",
        type: "GET",
        success: function (response) {
            for (var i = 0; i < response.length; i++) {
                var mess = response[i];
                 messageList.push(mess);            

            }

            console.log("ITS WORKING!:", response);
            drawMsg();
        },
        error: function (errorDetails) {
            console.log("Error: ", errorDetails);
        }
    });
}


//draw messages

function drawMsg(message) {

    var sntx = $("#msg");
    for(var i=0; i<messageList.length; i++){
        var c = messageList[i];
        var li = `<div>
        <p>Name: ${c.name} || Email: ${c.email} ||Message: ${c.question}</p>
        </div>`;
        sntx.append(li)
    }
    
}



function init() {
    //hook events
    $("#btnSave").click(saveItem);
    fetchMessage();

}

//when browser finishes loading all elements
window.onload = init;