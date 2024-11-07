function loadadmin(){

    // This function is used to load all admins' information and show in account management page.
    let url = "http://localhost:3100/callAdmin";
    fetch(url)
    .then((res) => res.json()) // Get JSON from the response
    .then((data) => {
    console.log(data);
        
    let table = document.getElementById("adminTable");
    let tr;

    for(let i=0;i<data.length;i++){

        // Create rows and columns for each value.
        tr = document.createElement("TR");
        let fname = document.createElement("TD");
        let lname = document.createElement("TD");
        let user = document.createElement("TD");
        let pass = document.createElement("TD");

        // Assign value
        fname.innerText = data[i].Fname;
        lname.innerText = data[i].Lname;
        user.innerText = data[i].Username;
        pass.innerText = data[i]._Password;

        // Add to table
        tr.appendChild(fname);
        tr.appendChild(lname);
        tr.appendChild(user);
        tr.appendChild(pass);
        table.appendChild(tr);
    }

    }).catch((err) => console.log(err));
}

function _add(){
    
    // Call API
    fetch("http://localhost:3100/callAdmin")
    .then((res) => res.json()) // Get JSON from the response
    .then((data) => {

        // get username and password from form.
        var user = document.getElementById("addEmail").value;
        var pass = document.getElementById("addPassword").value;
        let detected = false;

        // Check if username or password is already used.
        for(let i=0;i<data.length;i++){
            if(user == data[i].Username || pass == data[i]._Password){
                detected = true;
                break;
            }
        }
        if(detected){
            alert("This username or password already used, please try again with another information.");
        }else{

            // If both username and password are the new one, get the Fname and Lname from form and add to table by calling API.
            let lname = document.getElementById("addLname").value;
            let fname = document.getElementById("addFname").value;
            
            const addData ={Admin:{Fname: fname, Lname: lname, _Username: user, Password: pass}} ; 
            fetch("http://localhost:3100/addAdmin",{method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(addData)})
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {alert(data.message);
            }).catch((err) => console.log(err));
        }
        
    }).catch((err) => console.log(err));
}

function _edit(){
    let username = document.getElementById("put_username").value;
    let value = document.getElementById("put_value").value;
    let edit = document.getElementById("put_edit").value;
    // Get all values from form.

    const editData = {Admin:{Edit: edit, Value: value, Username: username}};

    // Edit admin's info by calling API.
    let url = "http://localhost:3100/updateAdmin"; 
    fetch(url,{method: 'PUT',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(editData)})
    .then((res) => res.json()) // Get JSON from the response
    .then((data) => {
    if(data.data==0){
        // Alert message if there is no the admin from admin's input
        alert(`Admin: ${username} doesn't exist on our system`);
    }else{
        alert(data.message);
    }
    }).catch((err) => console.log(err));
}

function _delete(){

    // Ask the admin to type username that will be deleted.
    let request = prompt("Please insert the first name of admin you want to remove");
    let url = "http://localhost:3100/deleteAdmin/"+request; 
    fetch(url ,{method: 'DELETE'})
    .then((res) => res.json()) // Get JSON from the response
    .then((data) => {
    if(data.data==0){
        alert("None of this information on our system");
    }else{
        alert(data.message);
    }
    }).catch((err) => console.log(err));
    
}