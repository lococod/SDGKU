var items = [];

function fetchCatalog() {
    items = [

        {
            "code": "1234",
            "description": "First Item",
            "price": 99.99,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2018%2F06%2Fintel_generic_cpu_background-100760187-large.jpg&f=1&nofb=1",
            "category": "CPU",
            "stock": 17,
            "deliveryDays": 7
        },

        {
            "code": "4321",
            "description": "Second Item",
            "price": 19.99,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2018%2F06%2Fintel_generic_cpu_background-100760187-large.jpg&f=1&nofb=1",
            "category": "RAM",
            "stock": 12,
            "deliveryDays": 3
        },
        {
            "code": "5896",
            "description": "Third Item",
            "price": 49.99,
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2018%2F06%2Fintel_generic_cpu_background-100760187-large.jpg&f=1&nofb=1",
            "category": "Case",
            "stock": 4,
            "deliveryDays": 6
        },
    ];
}

function displayCatalog() {
    //travel item array
    for (var i = 0; i < items.length; i++) {
        //get item
        var item = items[i];
        //draw item on the DOM
        drawItem(item);
    }

}

function drawItem() {


}


function init() {

    console.log("Hello World");
}
fetchCatalog();
displayCatalog();

window.onload = init;