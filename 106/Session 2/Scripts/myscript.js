function registerItem() {

    var code= $("#code").val();
    var description= $("#description").val();
    var price= $("#price").val();
    var category= $("#category").val();
    var stock= $("#stock").val();
    var deliveryDays= $("#DeliveryDays").val();
    

    //create Li
    var li = '<li>' + code +'</li>';

    // add li to ul
    $("#pendingList").append(li);

    
//clear input field
    $("#code").val("");
    $("#description").val("");
    $("#price").val("");
    $("#category").val("");
    $("#stock").val("");
    $("#deliveryDays").val("");
    

    //set focus
    $("#code").focus();

}

function init() {
    //hook events
    $("#btnSave").click(registerItem);
    
    }



//when browser finishes loading all elements
window.onload = init;