/*
Task 4
Create a to log in page with fields: username, password and a submit button On click,
if the fields are not entered, add red outline.If the fields are all entered, display a confirmation
message asking the user if he is sure.
    If he confirms display a success pop up and redirect the user to home.
    Store the user in localStorage, and on refresh read the data, if he has
logged in at least once, always redirect to home
* add a password validation (8 digits, one *....)
*/


let passwordElement = document.getElementById('inputPassword');

redirectMe(window.location.pathname);

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

function redirectMe(path) {
    switch (path.split("/").pop()) {
        case 'index.html':
            localStorage.getItem("password") && localStorage.getItem("user")  ? window.location = "home.html" : false;
            break;
        case 'home.html':
            !localStorage.getItem("password") || !localStorage.getItem("user") ? window.location = "index.html" : false;
            break;
        default:
            console.log("ERROR REDIRECT");
            break;
    }
}