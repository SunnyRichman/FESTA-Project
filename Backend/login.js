function verify() {
        
    let username = document.getElementById('usernameInput').value;
    let password = document.getElementById('passwordInput').value;

    let admin = "http://localhost:3100/callAcc?Username="+username
    fetch(admin)
    .then((res) => res.json()) // Get JSON from the response
    .then((data) => {
    console.log(data);
        
        if(data.length==0){
            alert("None of this user on our system");
            window.location.href = "/login";
        }else{
            if(password === data[0]._Password){
                window.location.href = "/adminPortal";
            }else{
                alert("Incorrect information");
                window.location.href = "/login";
            }
        }
    }).catch((err) => console.log(err));
}