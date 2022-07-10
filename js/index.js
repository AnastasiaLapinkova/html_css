let button = document.getElementById("signUpBtn")
let email = document.getElementById("email")
let password = document.getElementById("password")
var isExpanded = false

button.addEventListener("click", onSignInClick)

function onSignInClick() {
    if(isExpanded){
        if(signIn()) {
            toggleExpanded()
        }
    } else {
        toggleExpanded()
    }
}

function signIn() {
    if(validateEmail(email.value)) {
        alert('Success')
        return true
    } else {
        alert('Error')
        return false
    }
}

function toggleExpanded() {
    isExpanded = !isExpanded
    email.hidden = !email.hidden
    password.hidden = !password.hidden
}
const email_regex = "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"

function validateEmail(email) {
    return new String(email).match(email_regex)
}
