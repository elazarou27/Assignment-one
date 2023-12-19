//create the variable that stores the goods in an array
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
        ['UCLanLogoJumper','Purple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (1).jpg'],
        ['UCLanLogoJumper','RustyRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (2).jpg'],
        ['UCLanLogoJumper','WaterBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (3).jpg'],
        ['UCLanLogoJumper','White','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (4).jpg'],
        ['UCLanLogoJumper','Pink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (5).jpg'],
        ['UCLanLogoJumper','Black','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (6).jpg'],
        ['UCLanLogoJumper','OldBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (7).jpg'],
        ['UCLanLogoJumper','DarkGrey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (8).jpg'],
        ['UCLanLogoJumper','Red','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (9).jpg'],
        ['UCLanLogoJumper','Brown','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (10).jpg'],
        ['UCLanLogoJumper','Green','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (11).jpg'],
        ['UCLanLogoJumper','DarkRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (12).jpg'],
        ['UCLanLogoJumper','Yellow','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (13).jpg'],
        ['UCLanLogoJumper','LightGrey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (14).jpg'],
        ['UCLanLogoJumper','LightGreen','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (15).jpg'],
        ['UCLanLogoJumper','OldRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (16).jpg'],
        ['UCLanLogoJumper','LightPurple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (17).jpg'],
        ['UCLanLogoJumper','SlateBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (18).jpg'],
        ['UCLanLogoJumper','RealRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (19).jpg'],
        ['UCLanLogoJumper','OldPink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (20).jpg'],
        ['UCLanLogoJumper','SlateGrey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (21).jpg'],
        ['UCLanLogoJumper','BrightGreen','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (22).jpg'],
        ['UCLanLogoJumper','Teal','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (23).jpg'],
        ['UCLanLogoJumper','SkyBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (24).jpg'],
        ['UCLanLogoJumper','SunshinePink','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (25).jpg'],
        ['UCLanLogoJumper','Bronze','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (26).jpg'],
        ['UCLanLogoJumper','OliveGreen','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (27).jpg'],
        ['UCLanLogoJumper','BrightWhiteGreen','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (28).jpg'],
        ['UCLanLogoJumper','NavyBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (29).jpg'],
        ['UCLanLogoJumper','RustyOrange','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (30).jpg'],
        ['UCLanLogoJumper','BrightOrange','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (31).jpg'],
        ['UCLanLogoJumper','SkyPurple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (32).jpg'],
        ['UCLanLogoJumper','ReallyRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (33).jpg'],
        ['UCLanLogoJumper','PlumPurple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (34).jpg'],
        ['UCLanLogoJumper','DarkPurple','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (35).jpg'],
        ['UCLanLogoJumper','VibrantRed','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (36).jpg'],
        ['UCLanLogoJumper','OceanBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (37).jpg'],
        ['UCLanLogoJumper','Creame','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (38).jpg'],
        ['UCLanLogoJumper','LighterBlue','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (39).jpg'],
        ['UCLanLogoJumper','LightGrey','cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks','£29.99','images/items/jumpers/jumper (40).jpg'],
        ['UCLanLogoTshirt','NavyBlueNew','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (1).jpg'],
        ['UCLanLogoTshirt','RustyRedNew','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (2).jpg'],
        ['UCLanLogoTshirt','Burgundy','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (3).jpg'],
        ['UCLanLogoTshirt','Pink','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (4).jpg'],
        ['UCLanLogoTshirt','Teal','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (5).jpg'],
        ['UCLanLogoTshirt','Black','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (6).jpg'],
        ['UCLanLogoTshirt','OldRed','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (7).jpg'],
        ['UCLanLogoTshirt','Grey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (8).jpg'],
        ['UCLanLogoTshirt','Red','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (9).jpg'],
        ['UCLanLogoTshirt','Brown','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (10).jpg'],
        ['UCLanLogoTshirt','DarkPurple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (11).jpg'],
        ['UCLanLogoTshirt','Yellow','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (12).jpg'],
        ['UCLanLogoTshirt','MustardYellow','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (13).jpg'],
        ['UCLanLogoTshirt','DarkGrey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (14).jpg'],
        ['UCLanLogoTshirt','DarkGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (15).jpg'],
        ['UCLanLogoTshirt','BrightGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (16).jpg'],
        ['UCLanLogoTshirt','OliveGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (17).jpg'],
        ['UCLanLogoTshirt','DarkGrey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (18).jpg'],
        ['UCLanLogoTshirt','Orange','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (19).jpg'],
        ['UCLanLogoTshirt','Purple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (20).jpg'],
        ['UCLanLogoTshirt','SlateBlue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (21).jpg'],
        ['UCLanLogoTshirt','BrightPink','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (22).jpg'],
        ['UCLanLogoTshirt','BrightlyGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (23).jpg'],
        ['UCLanLogoTshirt','LimeGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (24).jpg'],
        ['UCLanLogoTshirt','OceanBlue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (25).jpg'],
        ['UCLanLogoTshirt','DarkRed','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (26).jpg'],
        ['UCLanLogoTshirt','AnotherGreen','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (27).jpg'],
        ['UCLanLogoTshirt','SlateGrey','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (28).jpg'],
        ['UCLanLogoTshirt','BrightOrange','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (29).jpg'],
        ['UCLanLogoTshirt','AnotherPurple','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (30).jpg'],
        ['UCLanLogoTshirt','RealRed','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (31).jpg'],
        ['UCLanLogoTshirt','BrilliantBlue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (32).jpg'],
        ['UCLanLogoTshirt','Creame','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (33).jpg'],
        ['UCLanLogoTshirt','TealBlue','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (34).jpg'],
        ['UCLanLogoTshirt','White','cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days','£19.99','images/items/tshirt/tshirt (35).jpg'],

];

//create the function to push elements into the products.html
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
        buyButton.id = 'buyButtonId';
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



