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
function ajaxRequest(uri,callback){

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () { 
        var loading = '\
        <div id="loader" class="load"></div> ';
        document.getElementById("contents").innerHTML = loading;
        if(this.readyState == 4 && this.status == 200) {
            var jfile = JSON.parse(this.responseText);
            console.log(jfile);
            callback(jfile);
        }
        
    };    
    xhttp.open("GET", uri, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();

}

/************************************ HOME SCREEN **************************************/

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


function init_home(){
    document.getElementById("contents").innerHTML += "<h3 class='animate-bottom' id='greeting'>Welcome</h3>";
    document.getElementById("loader").style.display = "none";
    document.getElementById("greeting").style.display = "block";
}

/************************************ COLORS **************************************/

/**
 * Function colors
 * Arguments: none
 * Description: displays the color banners 
 * returns none
 */
function colors() {
    mobile_nav();
    ajaxRequest("https://reqres.in/api/products",create_colors);
}


/**
 * Function create_colors
 * Arguments: json -> a json file
 * Description: adds the innformations of every color in the banners 
 * returns none
 */
function create_colors(json) {
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
    document.getElementById("contents").innerHTML = colors_body;
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

/************************************ USERS **************************************/

/**
 * Function users
 * Arguments: none
 * Description: creates the body of the users' table and makes the request to the api/users
 * returns none
 */
function users() {
    mobile_nav();
    if(sessionStorage.getItem("table") == null){
        ajaxRequest("https://reqres.in/api/users",create_table);
    }else{
        console.log(JSON.parse(sessionStorage.getItem("table")));
        create_users(JSON.parse(sessionStorage.getItem("table")));
    }
}

/**
 * Function create_table
 * Arguments: none
 * Description: creates the actual users' table and sorts it
 * returns none
 */
function create_table(jfile) {
    
    var users_array = jfile.data;
    users_array.sort((userA, userB) => {
        return userA.id - userB.id;
    });
    console.log(users_array);
    create_users(users_array);
}

/**
 * Function create_users
 * Arguments: jfile -> a json file
 * Description: creates users' table rows with every information needed
 * returns none
 */
function create_users(users_array) {
    var j = 1;
    var users_body = '\<div id="myUsers">\
    <h3 id="title">Users</h3><button id="delete-btn" disabled>DELETE</button>\
    <table id="myTable">\
    </table></div>';    

    document.getElementById("contents").innerHTML = users_body;
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    row.insertCell(0).innerHTML = " ";
    row.insertCell(1).innerHTML = Object.keys(users_array[0])[0].toUpperCase();
    row.insertCell(2).innerHTML = Object.keys(users_array[0])[3].toUpperCase().split('_').join(' ');
    row.insertCell(3).innerHTML = Object.keys(users_array[0])[2].toUpperCase().split('_').join(' ') ;
    row.insertCell(4).innerHTML = Object.keys(users_array[0])[1].toUpperCase();
    row.insertCell(5).innerHTML = Object.keys(users_array[0])[4].toUpperCase();

    for (var i = 0; i < users_array.length; i++) {
        var row = table.insertRow(j);
        row.setAttribute("id", j, 0);
        row.insertCell(0).innerHTML = "<input type='checkbox' id='user_check" + j + "' onclick = 'enable_button("+j+")'>";
        row.insertCell(1).innerHTML = users_array[i].id;
        row.insertCell(2).innerHTML = users_array[i].last_name;
        row.insertCell(3).innerHTML = users_array[i].first_name;
        row.insertCell(4).innerHTML = users_array[i].email;
        row.insertCell(5).innerHTML = (users_array[i].avatar).substring(users_array[i].avatar.lastIndexOf('/', users_array[i].avatar.lastIndexOf('/') - 1) + 1).split('/')[0];
        j++;
    }
    sessionStorage.setItem("table", JSON.stringify(users_array));
}

/**
 * Function enable_button
 * Arguments: id --> checkboxes id
 * Description: enables delete button when checkbox is pressed and 
 *              on button click calls delete_user
 * returns none
 */
function enable_button(id){
    if (document.getElementById("user_check"+id).checked == true){
        document.getElementById("delete-btn").disabled = false;
        document.getElementById("delete-btn").style.backgroundColor = '#008CBA';
        document.getElementById("delete-btn").onclick = function (){
            delete_user(id);
        }
    }else{
        document.getElementById("delete-btn").disabled = true;
    }
}


/**
 * Function delete_user
 * Arguments: none
 * Description: deletes user form table
 * returns none
 */
function delete_user(id) {
    console.log(document.getElementById(id));
    console.log("ID " + id);
    if(confirm("Are you sure you want to delete this user?") == true){
        var table_array = JSON.parse(sessionStorage.getItem("table"));
        console.log(table_array);
        
        for(var i = 0; i < table_array.length; i++){
            console.log("TABLE ID " + table_array[i].id);
            if(id == table_array[i].id){
                console.log("remove id: " + id);
                console.log("in position: " + i);
                document.getElementById(id).remove();
                console.log(table_array[i]);
                table_array.pop(i);
                sessionStorage.setItem("table", JSON.stringify(table_array));
                document.getElementById("delete-btn").disabled = true;                 
                document.getElementById("delete-btn").style.backgroundColor = 'gray';
                break;
            }
        }
        
        
    }else{
        document.getElementById("delete-btn").disabled = true;
        document.getElementById("user_check"+id).checked = false;
        document.getElementById("delete-btn").style.backgroundColor = 'gray';
    }
    
}
