

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

function displayCar(Car){
    var sntx = 
`<div class="item">
<img src='${Car.imageURL}'>
<label>${Car.year}</label>
<label>${Car.make}</label>
<label>${Car.model}</label>
<label>$${(Car.dailyPrice * 1).toFixed(2)}</label>
</div>`;
   
    var container = $("#catalog");

    container.append(sntx);
}


function init(){
    fetchCatalog();
}
window.onload = init();