/**
 * Function colors
 * Arguments: none
 * Description: creates the color banners and make the request to api/colors
 * returns none
 */
function colors() {

    var colors_body = '\
    <h3 id="title">Colors</h3><h3 id="sub-title">Items: </h3>\
    <div class="grid-container">\
    <div>1</div>\
    <div>2</div>\
    <div>3</div>\
    <div>4</div>\
    <div>5</div>\
    <div>6</div>\
    </div>';

    document.getElementById("contents").innerHTML = colors_body;
}




