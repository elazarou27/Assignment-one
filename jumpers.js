//create the variable that stores only the jumpers in an array
var goods = [
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
];

//create the function to push elements into the jumpers.html
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