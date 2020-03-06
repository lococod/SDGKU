

function fetchCatalog(){
    console.log("Fethcing Catalog!");

    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function (res) {
            console.log("From server: ", res);
        },
        error: function (details) {
            console.log("Error: ", details);
        }
    })
}


function init() {
    console.log("Catalog Page!");



}


window.onload = init;