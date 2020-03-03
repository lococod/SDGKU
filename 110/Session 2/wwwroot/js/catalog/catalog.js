function fetchCatalog() {
    console.log("Fetching Catalog");
    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function (res) {
            console.log("from server", res);

            for (var i = 0; i < res.length; i++) {
                displayCar(res[i]);
            }
        },
        error: function (details) {
            console.log("error: ", details);
        }
    })
}

function displayCar(car){
    var sntx = 
    `<div class='car'>
    <img src='${car.ImageURL}'>
    <label>Item Code:</label>
    <label class='code'>${car.Description}</label>
    </div>`;
   
    var container = $("#catalog");

    container.append(sntx);
}



funtion init() {
    console.log("Catalog Page!");

    fetchCatalog();
}

window.onload = init();