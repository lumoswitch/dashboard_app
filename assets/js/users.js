function ajaxRequest(uri,handler){

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () { if(xhttp.readyState==4){ handler(xhttp); }};    
    xhttp.open("GET", uri, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();

}


function create_table(data){
    var j=1;

    var table = document.getElementById("myTable");
    if (data.status == 200) {
        var jfile = JSON.parse(data.responseText);
        
        for(var i=0; i<jfile.data.length; i++){
            var row = table.insertRow(j);
            row.insertCell(0).innerHTML = "<input type='checkbox' />";
            row.insertCell(1).innerHTML = jfile.data[i].id;
            row.insertCell(2).innerHTML = jfile.data[i].last_name;
            row.insertCell(3).innerHTML = jfile.data[i].first_name;
            row.insertCell(4).innerHTML = jfile.data[i].email;
            row.insertCell(5).innerHTML = (jfile.data[i].avatar).substring(jfile.data[i].avatar.lastIndexOf('/')+1);
            j++;
        }
    }

}