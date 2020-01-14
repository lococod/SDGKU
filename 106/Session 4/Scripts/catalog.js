var items = [];

function fetchCatalog() {
    items = [

        {
            "code": "1234",
            "description": "Intel CPU",
            "price": 99.99,
            "image": "Images/cpu.jpg",
            "category": "CPU",
            "stock": 17,
            "deliveryDays": 7
        },

        {
            "code": "4321",
            "description": "DDR4 2666MHz Ram",
            "price": 19.99,
            "image": "Images/ram_lead_image.jpg",
            "category": "RAM",
            "stock": 12,
            "deliveryDays": 3
        },
        {
            "code": "598321",
            "description": "Generic Black Case",
            "price": 49.99,
            "image": "Images/case.jpg",
            "category": "Case",
            "stock": 4,
            "deliveryDays": 6
        },
        {
            "code": "598322",
            "description": "550w 80+",
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
    <label>Item Code:</label><label class='code'>${item.code}</label>
    <br>    
    <label>Description:</label><label class='description'>${item.description}</label> 
    <label>Category:</label><label class='category'>${item.category}</label> 
    <label>Price:</label><label class='price'>${item.price}</label>     
    <label>Stock:</label><label class='stock'>${item.stock}</label> 
    <label>Days to Deliver:</label><label class='deliveryDays'>${item.deliveryDays}</label> 
    <button class='btn btn-sm btn-info'>+</button>
    </div>`;

    var container = $("#catalog");

    container.append(sntx);
}


function search() {
    // console.log("User wants to search");

    var text = $("#txtSearch").val().toLowerCase();//get the search term

    //console.log(text);

    //clear non searched items
    $("#catalog").html("");

    //travel array to find the item that was searched

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.category.toLowerCase().includes(text) 
        || item.description.toLowerCase().includes(text)
        ||item.code == text
        ||item.price == text) 
        {
            drawItem(item);
        }

    }
}

function init() {

    //console.log("Hello World");

    //hook events
    $("#btnSearch").click(search);
    $("#txtSearch").keypress(function(e) {
        //console.log(e);
        if (e.keyCode == 13) {
            search();
        }
    })
}
fetchCatalog();
displayCatalog();


//HTTP Method - get/post/put/delete/patch
//HTTP Status Code

window.onload = init;