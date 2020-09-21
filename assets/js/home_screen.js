function home_screen() {

    document.getElementById("container").innerHTML = "<h3>Welcome</h3>";
}

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

function users() {

    var users_body = '\
    <h3 id="title">Users</h3><a href="#" id="delete-btn">DELETE</a>\
    <table id="myTable">\
        <tr>\
            <th> </th>\
            <th>ID</th>\
            <th>LAST NAME</th>\
            <th>FIRST NAME</th>\
            <th>EMAIL</th>\
            <th>AVATAR</th>\
        </tr>\
    </table>';

    document.getElementById("contents").innerHTML = users_body;
    ajaxRequest("https://reqres.in/api/users",create_table);
}

function settings() {

    document.getElementById("contents").innerHTML = "<h3>Settings</h3>";
}
