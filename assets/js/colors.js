/**
 * Function colors
 * Arguments: none
 * Description: displays the color banners 
 * returns none
 */
function colors() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("myUsers").style.display = "none";
    document.getElementById("greeting").style.display = "none";
    
    setTimeout(init_colors, 1000);
}

function init_colors(){
    
    document.getElementById("loader").style.display = "none";
    document.getElementById("myColors").style.display = "block";
}


/**
 * Function create_banners
 * Arguments: json -> a json file
 * Description: creates the color banners 
 * returns none
 */
function create_banners(json){
    var colors_body = '\<div id="myColors">\
    <h3 id="title">Colors</h3><h3 id="sub-title">Items: </h3>\
    <div id="colors" class="grid-container">\
    <div id="color1" class="colors43"><div id="banner1" class="footer"></div></div>\
    <div id="color2"><div id="banner2" class="footer"></div></div>\
    <div id="color3"><div id="banner3" class="footer"></div></div>\
    <div id="color4"><div id="banner4" class="footer"></div></div>\
    <div id="color5"><div id="banner5" class="footer"></div></div>\
    <div id="color6"><div id="banner6" class="footer"></div></div>\
    </div></div>';
    document.getElementById("contents").innerHTML += colors_body;
    document.getElementById("myColors").style.display = "none";
    
    create_colors(json);
}


/**
 * Function create_colors
 * Arguments: json -> a json file
 * Description: adds the innformations of every color in the banners 
 * returns none
 */
function create_colors(json) {
    var j = 1;
    var colors_array = json.data;
    colors_array.sort((colorA, colorB) => {
        return colorB.year - colorA.year;
    });
    document.getElementById("sub-title").innerHTML += colors_array.length;
    for (var i = 0; i < colors_array.length; i++) {
        document.getElementById("color" + j).style.backgroundColor = colors_array[i].color;
        document.getElementById("color" + j).innerHTML += "<p id='name" + j + "'>" + colors_array[i].color + "</p>";
        document.getElementById("name" + j).style.color = colors_array[i].color;
        document.getElementById("banner" + j).innerHTML += "<p id='color_name'>" + colors_array[i].name + "<p>" + colors_array[i].year + "</p></p>";
        j++;
    }
}

