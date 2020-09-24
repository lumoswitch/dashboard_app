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
    mobile_nav();
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
    document.getElementById("myUsers").style.display = "none";    
    var table = document.getElementById("myTable");

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
    if(confirm("Are you sure you want to delete this user?") == true){
        var table_array = JSON.parse(sessionStorage.getItem("table"));
        console.log(table_array);
        for(var i = 0; i < table_array.length; i++){
            if(id == table_array[i].id){
                console.log("remove id: " + id);
                console.log("in position: " + i);
                document.getElementById(id).remove();
                var new_array = table_array.splice(i, 1);
                sessionStorage.setItem("table", JSON.stringify(table_array));
                document.getElementById("delete-btn").disabled = true; 
                break;
            }
        }
        
    }else{
        document.getElementById("delete-btn").disabled = true;
        document.getElementById("user_check"+id).checked = false;
    }
    
}
