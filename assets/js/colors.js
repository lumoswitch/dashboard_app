/**
 * Function colors
 * Arguments: none
 * Description: creates the color banners and make the request to api/colors
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




