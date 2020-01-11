var items = [];

function fetchCatalog() {
    items = [

        {
            "code": "1234",
            "description": "First Item",
            "price": 99.99,
            "image": "Images/cpu.jpg",
            "category": "CPU",
            "stock": 17,
            "deliveryDays": 7
        },

        {
            "code": "4321",
            "description": "Second Item",
            "price": 19.99,
            "image": "Images/ram_lead_image.jpg",
            "category": "RAM",
            "stock": 12,
            "deliveryDays": 3
        },
        {
            "code": "598321",
            "description": "Third Item",
            "price": 49.99,
            "image": "Images/case.jpg",
            "category": "Case",
            "stock": 4,
            "deliveryDays": 6
        },
        {
            "code": "598321",
            "description": "Fourth Item",
            "price": 59.99,
            "image": "Images/psu.jpg",
            "category": "PSU",
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