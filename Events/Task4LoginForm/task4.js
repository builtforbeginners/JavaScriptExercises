/*
Task 4
Create a log in page with fields: username, password and a submit button On click,
if the fields are not entered, add red outline.If the fields are all entered, display a confirmation
message asking the user if he is sure.
    If he confirms display a success pop up and redirect the user to home.
    Store the user in localStorage, and on refresh read the data, if he has
logged in at least once, always redirect to home
* add a password validation (8 digits, one *....)
*/


// TODO: Доколку сум на index.html да не ме редиректира пак на истата и
//       ако сум најавен има во localStorage записи да ме носи на home.html


var passwordElement = document.getElementById('inputPassword');

console.log(window.location.hostname);

if(window.location.href !== "index.html"){
    if(!localStorage.getItem("password") || !localStorage.getItem("user"))
        window.location = "index.html";
}

function submitForm() {
    let username = document.getElementById('inputUsername').value;
    let password = passwordElement.value;

    if (!username || !password) {
        document.getElementById('errorList').style.display = 'block';
        return;
    }

    if (password.length < 9) {
        document.getElementById('errorPassword').style.display = 'block';
        return;
    }
    document.getElementById('errorList').style.display = 'none';
    if (confirm("Do you want to continue to home page!!!")) {
        localStorage.setItem("user", username);
        localStorage.setItem("password", password);
        window.location = "home.html";
    }
}

function validationPassword() {
    if (passwordElement.value.length < 9)
        document.getElementById('errorPassword').style.display = 'block';
    else
        document.getElementById('errorPassword').style.display = 'none';
}