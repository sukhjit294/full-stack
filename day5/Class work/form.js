
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmpassword").value;

let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
         return alert("Passwords do not match")
    }

    let obj = {
        username, email, password, confirmPassword
    }

    let userData = document.getElementById("userData")
    userData.style.width = "30%"
    userData.style.margin = "auto"
    userData.style.border = "1px solid black"
    userData.style.borderRadius = "8px"
    userData.style.padding = "10px"
    userData.style.textAlign = "center"
    userData.style.marginTop = "30px"


    let h2 = document.createElement("h2");
    p1.innerText = obj.username;
    
    let p1 = document.createElement("p");
    p1.innerText = obj.email;

   let p2 = document.createElement("p");
   p2.innerText = obj.password;

   let p3 = document.createElement("p");
   p3.innerText = obj.confirmPassword;

   userData.append(h2, p1, p2, p3);

});