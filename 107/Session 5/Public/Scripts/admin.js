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

//draw messages

function retrieveMessages() {
    //get messages from server
    $.ajax({
        url: serverURL + "message",
        type: "GET",
        success: function (response) {
            console.log("response: ", response);
            for (var i = 0; i < response.length; i++) {
                var item = response[i];
                messagelist.push(item);

            }

            drawMessages();

        },
        error: function (errorDetails) {
            console.log("Error: ", errorDetails);
        }
    });

}

function drawMessages() {
    console.log(messagelist);
    // get the container for categories
    var container = $("#messages");
    // travel the categories array
    for (var i = 0; i < messagelist.length; i++) {
        // get each category
        var c = messagelist[i];
        // create an LI for category
        var li = `<li class="list-group-item">${c.messages}</li>;`
        console.log(li);
        // add li to container
        container.append(li);
    }
}

function init() {
    //hook events
    $("#btnSave").click(saveItem);

}

//when browser finishes loading all elements
window.onload = init;