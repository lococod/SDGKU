

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
    `<div class="card-group">`;
    var sntx = 
// `<div class="item card-group">
// <div class="card>
// <img class="card-img-top" src='${Car.imageURL}'>
// <div class="card-body"
// <h5 class="card-title"<label>${Car.year}</label>
// <label>${Car.make}</label>
// <label>${Car.model}</label></h5>
// <label>${Car.passengers}</label>
// <label>$${(Car.dailyPrice * 1).toFixed(2)}</label>
// <label>${Car.description}</label>
// </div></div></div>`;
// `<div class="row">
// <div class="col-sm-6">
// <div class="card-group">
//   <div class="card">
//   <img class="card-img-top" src="${Car.imageURL}" alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">${Car.year} ${Car.make} ${Car.model}</h5>
//       <p class="card-text">${Car.description}</p>
//       <a href="" class="btn btn-primary">Rent Me!</a>
//     </div>
//   </div>
// </div>
// </div>
// <br>
// `;


`
<div class="card">
  <img class="card-img-top" src="${Car.imageURL}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${Car.year} ${Car.make} ${Car.model}</h5>
    <p class="card-text">${Car.description}</p>
    <p class="card-text"><small class="text-muted">Daily Price: $${(Car.dailyPrice * 1).toFixed(2)}</small></p>
    <a href="#" class="btn btn-primary">Rent Me!</a>
  </div>
</div>`;
   
    var container = $("#catalog");

    container.append(sntx);
`</div>`;
}


function init(){
    fetchCatalog();
}
window.onload = init();