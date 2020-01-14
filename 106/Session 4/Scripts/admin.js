var serverURL = "http://restclass.azurewebsites.net/API/";

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

function clearForm(){

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
    //console.log(jsonString);
    //console.log(theItem);
    //  console.log("code:" + code + "description:" + description + "price:" + price + "category:" + category + "image:" + image + "stock:" + stock + "deliveryDays:" + deliveryDays);

  

    $.ajax({
        url: serverURL + "points",
        type: "POST",
        data: jsonString,
        contentType: "application/json",
        success: function (response) {
            console.log("ITS WORKING!:" + response);
            clearForm();
            $("#alertSuccess").removeClass("hidden");
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
    $("#btnSave").click(saveItem);
  
}

//when browser finishes loading all elements
window.onload = init;