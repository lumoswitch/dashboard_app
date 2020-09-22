/**
 * Function users
 * Arguments: none
 * Description: creates the body of the users' table and makes the request to the api/users
 * returns none
 */
function users() {

    var users_body = '\
    <h3 id="title">Users</h3><button id="delete-btn" disabled>DELETE</button>\
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
    ajaxRequest("https://reqres.in/api/users",response_handler);
}

/**
 * Function create_table
 * Arguments: none
 * Description: creates the actual users' table and sorts it
 * returns none
 */
function create_table(jfile) {
    var j=1;

    var table = document.getElementById("myTable");
    for (var i = 0; i < jfile.data.length; i++) {
        var row = table.insertRow(j);
        row.insertCell(0).innerHTML = "<input type='checkbox' />";
        row.insertCell(1).innerHTML = jfile.data[i].id;
        row.insertCell(2).innerHTML = jfile.data[i].last_name;
        row.insertCell(3).innerHTML = jfile.data[i].first_name;
        row.insertCell(4).innerHTML = jfile.data[i].email;
        row.insertCell(5).innerHTML = (jfile.data[i].avatar).substring(jfile.data[i].avatar.lastIndexOf('/', jfile.data[i].avatar.lastIndexOf('/') - 1) + 1).split('/')[0];
        j++;
    }
    
    sort_table();
}

/**
 * Function sortTable
 * Arguments: none
 * Description: sorts a table by id
 * returns none
 */
function sort_table() {
    
  }