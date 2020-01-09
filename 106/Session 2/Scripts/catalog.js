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

function drawItem(item) {

    var sntx = `<div class='item'>
    <img src='${item.image}'>
    <label class='code'>${item.code}</label>    
    <label class='description'>${item.description}</label> 
    <label class='category'>${item.category}</label> 
    <label class='price'>${item.price}</label>     
    <label class='stock'>${item.stock}</label> 
    <label class='deliveryDays'>${item.deliveryDays}</label> 
    <button class='btn btn0sm btn-info'>+</button>
    </div>`;

    var container = $("#catalog");

    container.append(sntx);
}


function init() {

    console.log("Hello World");
}
fetchCatalog();
displayCatalog();

window.onload = init;