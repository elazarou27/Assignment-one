//create the variable that stores only the hoodies in an array
var goods = [
    ['UCLan Hoodie','Purple','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (1).jpg'],
    ['UCLan Hoodie','Light Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks', '£39.99','images/items/hoodies/hoodie (2).jpg'],
    ['UCLan Hoodie','Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (3).jpg'],
    ['UCLan Hoodie','Dark Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (4).jpg'],
    ['UCLan Hoodie','Black','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (5).jpg'],
    ['UCLan Hoodie','Salmon','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (6).jpg'],
    ['UCLan Hoodie','Burgundy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (7).jpg'],
    ['UCLan Hoodie','Light Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (8).jpg'],
    ['UCLan Hoodie','Slate Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (9).jpg'],
    ['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (10).jpg'],
    ['UCLan Hoodie','Teal','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (11).jpg'],
    ['UCLan Hoodie','Navy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (12).jpg'],
    ['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (13).jpg'],
    ['UCLan Hoodie','Creame','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (14).jpg'],
    ['UCLan Hoodie','Lime','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (15).jpg'],
    ['UCLan Hoodie','Off Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (16).jpg'],
    ['UCLan Hoodie','Red','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (17).jpg'],
    ['UCLan Hoodie','Charcoal','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (18).jpg'],
    ['UCLan Hoodie','Navy Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (19).jpg'],
    ['UCLan Hoodie','Lighter Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (20).jpg'],
    ['UCLan Hoodie','New Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (21).jpg'],
    ['UCLan Hoodie','Forest Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (22).jpg'],
    ['UCLan Hoodie','Ocean Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (23).jpg'],
    ['UCLan Hoodie','Pink','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (24).jpg'],
    ['UCLan Hoodie','Orange New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (25).jpg'],
    ['UCLan Hoodie','Black','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (26).jpg'],
    ['UCLan Hoodie','Light Off Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (27).jpg'],
    ['UCLan Hoodie','Rusty Red','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (28).jpg'],
    ['UCLan Hoodie','Slate Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (29).jpg'],
    ['UCLan Hoodie','Bright Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (30).jpg'],
    ['UCLan Hoodie','Bright Pink','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (31).jpg'],
    ['UCLan Hoodie','Burgundy New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (32).jpg'],
    ['UCLan Hoodie','Navy New','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (33).jpg'],
    ['UCLan Hoodie','Bright Green','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks','£39.99','images/items/hoodies/hoodie (34).jpg'],
    ];

//create the function to push elements into the hoodies.html
function demo() {
    var main = document.getElementById('products');

    //create the loop that takes every element from the goods array
    for (var i = 0; i < goods.length; i++) {

        var div = document.createElement('div');
        var title = document.createElement('h3');
        var color = document.createElement('color');
        var picture = document.createElement('img');
        var price = document.createElement('price');
        var description = document.createElement('description');
        var linebreak = document.createElement("br");
        var linebreak2 = document.createElement("br");
        var linebreak3 = document.createElement("br");
        var linebreak4 = document.createElement("br");
        var buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.id = "buyButtonId";
        var readMore = document.createElement("a");
        readMore.textContent = 'Read More';
        readMore.href = 'item.html';

        main.appendChild(div);
        div.appendChild(picture);
        div.appendChild(title);
        div.appendChild(color);
        div.appendChild(linebreak);
        div.appendChild(description);
        div.appendChild(linebreak2);
        div.appendChild(readMore);
        div.appendChild(linebreak3);
        div.appendChild(price);
        div.appendChild(linebreak4);
        div.appendChild(buyButton);
        div.className = "productDiv";

        //choose which position from the array will take each variable
        title.innerHTML = goods[i][0];
        color.innerHTML = goods[i][1];
        description.innerHTML = goods[0][2];
        price.innerHTML = goods[i][3];
        picture.src = goods[i][4];

    }
}