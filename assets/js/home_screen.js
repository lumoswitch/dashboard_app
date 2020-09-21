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
    <table>\
            <tr>\
                <th> </th>\
                <th>ID</th>\
                <th>LAST NAME</th>\
                <th>FIRST NAME</th>\
                <th>EMAIL</th>\
                <th>AVATAR</th>\
            </tr>\
            <tr>\
                <td><input type="checkbox" /></td>\
                <td>1</td>\
                <td>Alfreds Futterkiste</td>\
                <td>Maria Anders</td>\
                <td>Germany</td>\
                <td>Maria Anders</td>\
            </tr>\
            <tr>\
                <td><input type="checkbox" /></td>\
                <td>2</td>\
                <td>Alfreds Futterkiste</td>\
                <td>Centro comercial Moctezuma</td>\
                <td>Francisco Chang</td>\
                <td>Mexico</td>\
            </tr>\
            <tr>\
                <td><input type="checkbox" /></td>\
                <td>3</td>\
                <td>Alfreds Futterkiste</td>\
                <td>Ernst Handel</td>\
                <td>Roland Mendel</td>\
                <td>Austria</td>\
            </tr>\
            <tr>\
                <td><input type="checkbox" /></td>\
                <td>4</td>\
                <td>Alfreds Futterkiste</td>\
                <td>Island Trading</td>\
                <td>Helen Bennett</td>\
                <td>UK</td>\
            </tr>\
            <tr>\
                <td><input type="checkbox" /></td>\
                <td>5</td>\
                <td>Alfreds Futterkiste</td>\
                <td>Laughing Bacchus Winecellars</td>\
                <td>Yoshi Tannamuri</td>\
                <td>Canada</td>\
            </tr>\
            <tr>\
                <td><input type="checkbox" /></td>\
                <td>6</td>\
                <td>Alfreds Futterkiste</td>\
                <td>Magazzini Alimentari Riuniti</td>\
                <td>Giovanni Rovelli</td>\
                <td>Italy</td>\
            </tr>\
    </table>';

    document.getElementById("contents").innerHTML = users_body;
}

function settings() {

    document.getElementById("contents").innerHTML = "<h3>Settings</h3>";
}
