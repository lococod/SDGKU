
function fetchCatalog(){
    console.log("Fetching Catalog");
    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function(res){
            console.log("from server", res);
        },
        error: function(details){
            console.log("error: ", details);
        }
    })
}

funtion init(){
    console.log("Catalog Page!");

    fetchCatalog();
}

window.onload = init;