/**
 * Function users
 * Arguments: none
 * Description: creates the body of the users' table and makes the request to the api/users
 * returns none
 */
function users() {
    document.getElementById("myColors").style.display = "none";
    document.getElementById("greeting").style.display = "none";
    document.getElementById("loader").style.display = "block";
    
    setTimeout(init_users, 1000);
}

function init_users(){
    document.getElementById("myUsers").style.display = "block";
    document.getElementById("loader").style.display = "none";
}

/**
 * Function create_table
 * Arguments: none
 * Description: creates the actual users' table and sorts it
 * returns none
 */
function create_table(jfile) {
    var users_body = '\<div id="myUsers">\
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
    </table></div>';

    document.getElementById("contents").innerHTML += users_body;

    create_users(jfile);
    document.getElementById("myUsers").style.display = "none";

}

/**
 * Function create_users
 * Arguments: jfile -> a json file
 * Description: creates users' table rows with every information needed
 * returns none
 */
function create_users(jfile) {
    var j = 1;

    var table = document.getElementById("myTable");
    var users_array = jfile.data;
    users_array.sort((userA, userB) => {
        return userA.id - userB.id;
    });
    for (var i = 0; i < users_array.length; i++) {
        var row = table.insertRow(j);
        row.setAttribute("id", j, 0);
        row.insertCell(0).innerHTML = "<input id='user_check" + j + "' type='checkbox' onclick='delete_user(" + j + ");' />";
        row.insertCell(1).innerHTML = users_array[i].id;
        row.insertCell(2).innerHTML = users_array[i].last_name;
        row.insertCell(3).innerHTML = users_array[i].first_name;
        row.insertCell(4).innerHTML = users_array[i].email;
        row.insertCell(5).innerHTML = (users_array[i].avatar).substring(users_array[i].avatar.lastIndexOf('/', users_array[i].avatar.lastIndexOf('/') - 1) + 1).split('/')[0];
        sessionStorage.setItem("id" + j, users_array[i].id);
        j++;
    }
}

/**
 * Function delete_user
 * Arguments: none
 * Description: deletes user form table
 * returns none
 */
function delete_user(id) {
    document.getElementById("delete-btn").disabled = false;
    document.getElementById("delete-btn").onclick = function (){
        if(confirm("Are you sure you want to delete this user?") == true){
            for(key of Object.keys(sessionStorage)){
                if(id == sessionStorage["id"+id]){
                    document.getElementById(id).remove();
                    document.getElementById("delete-btn").disabled = true; 
                    break;
                }
            }
            
        }else{
            document.getElementById("delete-btn").disabled = true;
            document.getElementById("user_check"+id).checked = false;
        }
    }
}
