function createTodo() {
    //console.log("btn pressed");



    //     var text = document.getElementById("txtText").value;
    // console.log(text);


    //get text
    var text2 = $("#txtText").val();

    //create Li
    var li = '<li class="list-group-item d-flex justify-content-between align-items-center">' + text2 + ' <button id="listButton">Done!</button> </li>';

    // add li to ul
    $("#pendingList").append(li);

    //console.log(text2);
    //clear input field
    $("#txtText").val("");
    //set focus
    $("#txtText").focus();

}



function init() {

    //console.log("ToDo App working!");
    //console.log($);

    //var txt = document.getElementById("txtTest");
    //console.log(txt);
    //console.log(txt.value);


    //sayHello();





    //hook events
    $("#btnSave").click(createTodo);
    $("#txtText").keypress(function(e) {
        //console.log(e);
        if (e.key == "Enter") {
            createTodo();
        }
    })

}

function sayHello() {
    console.log("Donald Lococo");
}



//when browser finishes loading all elements
window.onload = init;