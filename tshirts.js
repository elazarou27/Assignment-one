//create the variable that stores only the t-shirts in an array
var goods = [
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

//create the function to push elements into the tshirts.html
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