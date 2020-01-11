var serverURL = "http://restclass.azurewebsites.net/API/";




function saveItem() {
    var code = $("#code").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var category = $("#category").val();
    var image = $("#image").val();
    var stock = $("#stock").val();
    var deliveryDays = $("#deliveryDays").val();



    console.log("code:" + code + "description:" + description + "price:" + price + "category:" + category + "image:" + image + "stock:" + stock + "deliveryDays:" + deliveryDays);

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

    $.ajax({

    });
}


function textAjax() {
    $.ajax({
        url: serverURL + "test",
        type: 'GET',
        success: function (res) {
            console.log("Server says:"+res);
        }, 
        error: function (err) { 
            console.log("error has occured:"+err); }
    });
}
function init() {
    //hook events
    $("#btnSave").click(saveItem);
}

//when browser finishes loading all elements
window.onload = init;