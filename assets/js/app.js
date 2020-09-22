/**
 * Function home_screen
 * Arguments: none
 * Description: Writes welcome message on main div
 * returns none
 */
function home_screen() {
    document.getElementById("myUsers").style.display = "none";
    document.getElementById("myColors").style.display = "none";
    document.getElementById("greeting").style.display = "block";
}

/**
 * Function settings
 * Arguments: none
 * Description: Writes settings message on main div
 * returns none
 */
function settings() {
    document.getElementById("contents").innerHTML += "<h3>Settings</h3>";
    document.getElementById("myUsers").style.display = "none";
    document.getElementById("myColors").style.display = "none";
    document.getElementById("greeting").style.display = "none";
}

/**
 * Function mobile_nav
 * Arguments: none
 * Description: changes class name in nav in order to 
 *              apply different css rules in mobile view
 * returns none
 */
function mobile_nav(){
    var x = document.getElementById("myNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/**
 * Function ajaxRequest
 * Arguments: uri -> who I'm asking the data from 
 *            handler -> a function to handle the received data
 * Description: makes an AJAX request to a server and on a success gets data back
 * returns none
 */
function ajaxRequest(uri,handler){

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () { if(xhttp.readyState==4){ handler(xhttp,create_table); }};    
    xhttp.open("GET", uri, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();

}

/**
 * Function response_handler
 * Arguments: data -> the data the server send back 
 *            callback -> a function to do something with the data
 * Description: receives the data from the server and feeds the to callback
 * returns none
 */
function response_handler(data,callback){
    
    
    if (data.status == 200) {
        var jfile = JSON.parse(data.responseText);
        console.log(jfile);
        callback(jfile);
       
    }
}

function init_page(){
    var colors_body = '\<div id="myColors">\
    <h3 id="title">Colors</h3><h3 id="sub-title">Items: </h3>\
    <div id="colors" class="grid-container">\
    <div>1</div>\
    <div>2</div>\
    <div>3</div>\
    <div>4</div>\
    <div>5</div>\
    <div>6</div>\
    </div></div>';
    document.getElementById("contents").innerHTML += colors_body;
    document.getElementById("contents").innerHTML += "<h3 class='animate-bottom' id='greeting'>Welcome</h3>";
    document.getElementById("loader").style.display = "none";
    document.getElementById("myColors").style.display = "none";
    document.getElementById("greeting").style.display = "block";
}

window.onload = function() {
    ajaxRequest("https://reqres.in/api/users",response_handler);
    
    var loading = '\
    <div id="loader" class="load"></div> ';
    document.getElementById("contents").innerHTML += loading;
    setTimeout(init_page, 1000);
    
    
};