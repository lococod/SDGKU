function Car(year,make,model,cyls,dailyPrice,imageURL,passengers,type,description,fuelType)
{
    this.year = year;
    this.make = make;
    this.model = model;
    this.cyls = cyls;
    this.dailyPrice = dailyPrice;
    this.imageURL = imageURL;
    this.passengers = passengers;
    this.type = type;
    this.description = description;
    this.fuelType = fuelType;

}


function clearForm(){
$("#txtYear").val("");
$("#txtMake").val("");
$("#txtModel").val("");
$("#txtCyls").val("");
$("#txtDailyPrice").val("");
$("#txtImageUrl").val("");
$("#txtPassengers").val("");
$("#txtDescription").val("");

}


function saveCar() {
    var year = $("#txtYear").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var cyls = $("#txtCyls").val();
    var dailyPrice = $("#txtDailyPrice").val();
    var imageURL = $("#txtImageUrl").val();
    var passengers = $("#txtPassengers").val();
    var type = $("#txtType").val();
    var description = $("#txtDescription").val();
    var fuelType = $("#txtFuel").val();

var theNewCar = new Car(year,make,model,cyls,dailyPrice,imageURL,passengers,type,description,fuelType);
console.log(theNewCar.make);

$.ajax({
    url: '/catalog/saveCar',
    type: 'POST',
    data: JSON.stringify(theNewCar),
    contentType: 'application/json',
    success: function(res){
        console.log("Server says ", res);
        clearForm();
    },
    error: function(details){
        console.log("Error ", details);
    }
})




}



function init() {
    console.log("Register Page!");
    $("#btnSave").click(saveCar);
    
}

window.onload = init;