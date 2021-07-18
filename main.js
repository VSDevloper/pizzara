menu_list_array = ["Veg Margherita Pizza", "Margherita","Double Cheese Margherita", "Farm House", "Peppy Paneer.", "Peppy Paneer.", "Deluxe Veggie.", "Veg Extravaganza", "CHEESE N CORN"//add more items
                    ];

function getmenu(){
var htmldata;
htmldata ="<ol class= 'menu-list'>";
menu_list_array.sort();
for(var i=0; i<menu_list_array.length;i++){
    htmldata=htmldata+ '<li>' +menu_list_array[i] + '</li>'

}
htmldata=htmldata+ "</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){

    htmldata=htmldata+ '<dic class="card">'
    +'<img src="images/pizzaImg.png"/>'
    +menu_list_array[i] + '<div>'
}
htmldata=htmldata+ "</section>"
document.getElementById("diplay_addmenu").innerHTML = htmldata;

}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}