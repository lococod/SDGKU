var items = [];
//var serverURL = "http://restclass.azurewebsites.net/API/";
var serverURL = "http://localhost:8080/api/";

var categories = [];

function fetchCatalog() {


    //get items from server
    $.ajax({
        url: serverURL + "items",
        type: "GET",
        success: function (response) {
            // solve, show only MY items
            // travel response array
            // get each item on the array
            // if the item.user == "Sergio"
            // then, push item into items array

            for (var i = 0; i < response.length; i++) {
                var item = response[i];
                if (item.user == "Donald") {
                    items.push(item);
                }

            }

            console.log("ITS WORKING!:", response);
            displayCatalog();
        },
        error: function (errorDetails) {
            console.log("Error: ", errorDetails);
        }
    });
}
// items = [

//     {
//         "code": "1234",
//         "description": "Intel CPU",
//         "price": 99.99,
//         "image": "Images/cpu.jpg",
//         "category": "CPU",
//         "stock": 17,
//         "deliveryDays": 7
//     },

//     {
//         "code": "4321",
//         "description": "DDR4 2666MHz Ram",
//         "price": 19.99,
//         "image": "Images/ram_lead_image.jpg",
//         "category": "RAM",
//         "stock": 12,
//         "deliveryDays": 3
//     },
//     {
//         "code": "598321",
//         "description": "Generic Black Case",
//         "price": 49.99,
//         "image": "Images/case.jpg",
//         "category": "Case",
//         "stock": 4,
//         "deliveryDays": 6
//     },
//     {
//         "code": "598322",
//         "description": "550w 80+",
//         "price": 59.99,
//         "image": "Images/psu.jpg",
//         "category": "PSU",
//         "stock": 4,
//         "deliveryDays": 6
//     },

// ];


function displayCatalog() {
    //travel item array
    for (var i = 0; i < items.length; i++) {
        //get item
        var item = items[i];
        //draw item on the DOM
        drawItem(item);

        var cat = item.category;
        if (!categories.includes(cat)) {
            categories.push(cat);
        }

    }
    drawCategories();

}

function drawItem(item) {

    var sntx = `<div class='item'>
    <img src=' ${item.image}'>
    <label>Item Code: </label><label class='code'> ${item.code}</label>
    <br>    
    <label>Description: </label><label class='description'> ${item.description}</label> 
    <label>Category: </label><label class='category'> ${item.category}</label> 
    <label>Price: </label><label class='price'> ${(item.price * 1).toFixed(2)}</label>     
    <label>Stock: </label><label class='stock'> ${item.stock}</label> 
    <label>Days to Deliver: </label><label class='deliveryDays'> ${item.deliveryDays}</label> 
    <button class='btn btn-sm btn-info'>+</button>
    </div>`;

    var container = $("#catalog");

    container.append(sntx);
}

function drawCategories() {


    // get the container for categories

    var container = $("#categories");

    // travel the categories array

    for (var i = 0; i < categories.length; i++) {


        // get each category
        var c = categories[i];
        // create an LI for category

        var li = `<li class="list-group-item" onclick="searchByCategory('${c}');"><a href="#" >${c}</a></li>`;
        // add li to container

        container.append(li);
    }
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
            || item.code == text
            || item.price == text) {
            drawItem(item);
        }

    }
}

function resetCategory(){
    var text = "";
    $("#catalog").html("");
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.category.toLowerCase().includes(text)) {
            drawItem(item);
        }

    }

}

function searchByCategory(catName) {
    //console.log("search",catName);
    $("#catalog").html("");
    //clear and travel array showing only categories
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.category.includes(catName)
        ) {
            drawItem(item);
        }

    }
}

function init() {

    //console.log("Hello World");

    //hook events
    $("#btnSearch").click(search);
    $("#txtSearch").keypress(function (e) {
        //console.log(e);
        if (e.keyCode == 13) {
            search();
        }
    })
    $("#catalog").on("click", ".item", function () {

        // $(this).toggleClass("selected");

        // get the image of the clicked element
        var img = $(this).find('img').clone();

        $(".modal-body").html(img);
        $("#modal").modal();

    });

}
fetchCatalog();
displayCatalog();


//HTTP Method - get/post/put/delete/patch
//HTTP Status Code

window.onload = init;