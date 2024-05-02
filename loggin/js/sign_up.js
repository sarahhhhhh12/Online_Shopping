var fname = 0;
var lname = 0;
var userEmail = 0;
var userPassword = 0;
var userPhoneNumber = 0;

function fnameValidation() {
    var element = document.getElementById('firstName');
    var name = document.SignUp.firstName.value;
    var message = document.getElementById('correctfName');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if (name == '') {
        element.style.backgroundColor = "white";
        message.style.color = "white";
        message.innerHTML = "John";
        fname = 0;
    } else if (!(/^[a-zA-Z\s]+$/.test(name))) {
        element.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "not a valid first name";
        fname = 0;
    } else {
        element.style.backgroundColor = goodColor;
        message.innerHTML = "";
        fname = 1;
    }

}

function lnameValidation() {
    var element = document.getElementById('lastName');
    var name = document.SignUp.lastName.value;
    var message = document.getElementById('correctlName');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if (name == '') {
        element.style.backgroundColor = "white";
        message.style.color = "white";
        message.innerHTML = "Doe";
        lname = 0;
    } else if (!(/^[a-zA-Z\s]+$/.test(name))) {
        element.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "not a valid last name";
        lname = 0;
    } else {
        element.style.backgroundColor = goodColor;
        message.innerHTML = "";
        lname = 1;
    }
}

function emailValidation() {
    var element = document.getElementById('email');
    var email = document.SignUp.email.value;
    var message = document.getElementById('correctemail');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var storedemail;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (email == '') {
        element.style.backgroundColor = "white";
        message.style.color = "white";
        message.innerHTML = "John.Doe@gmail.com";
        userEmail = 0;
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        element.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "not a valid email-id";
        userEmail = 0;
    } else if (/^[a-zA-Z]/.test(email)) {
        element.style.backgroundColor = goodColor;
        message.innerHTML = "";
        userEmail = 1;
    }
    var itemsArray = JSON.parse(localStorage.getItem('itemsArray'));
    for (i = 0; i < itemsArray.length; i++) {
        storedemail = itemsArray[i].email;
        if (email == storedemail) {
            message.style.color = goodColor;
            message.innerHTML = "Already a registered user. You shall be redirected to the sign in page.";
            setTimeout(reDirect, 2000);
        }
    }
}

function checkPass() {
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('confirmPassword');
    var message = document.getElementById('confirmMessage');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (pass1.value == pass2.value) {
        if (pass1.value.length >= 6) {
            pass1.style.backgroundColor = goodColor;
            pass2.style.backgroundColor = goodColor;
            message.innerHTML = "";
            userPassword = 1;
        } else {
            pass2.style.backgroundColor = goodColor;
            message.style.color = badColor;
            message.innerHTML = "Password strength is poor";
            userPassword = 0;
        }

    } else {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords don't match";
        userPassword = 0;
    }
}

function phNumberValidation() {
    var element = document.getElementById('phoneNumber');
    var phNumber = document.SignUp.phoneNumber.value;
    var message = document.getElementById('correctphnumber');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var numbers = /^\d{10}$/;
    if (phNumber == '') {
        element.style.backgroundColor = "white";
        message.style.color = "white";
        message.innerHTML = "9876543210";
        userPhoneNumber = 0;
    } else if (numbers.test(phNumber)) {
        element.style.backgroundColor = goodColor;
        message.innerHTML = "";
        userPhoneNumber = 1;
    } else {
        element.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "not a valid phone number";
        userPhoneNumber = 0;
    }
}

function copyAddress() {
    var pA = document.SignUp.permanentAddress.value;
    if (document.SignUp.sameAsAbove.checked == true) {
        document.SignUp.contactAddress.value = pA;
        document.getElementById("contactAddress").disabled = true;
    } else
        document.getElementById("contactAddress").disabled = false;
}

function passwordStrength() {
    var pwd = document.SignUp.password.value;
    var message = document.getElementById('confirmMessage');
    var badColor = "#ff6666";
    if (pwd.length < 6) {
        message.style.color = badColor;
        message.innerHTML = "Password strength is poor";
    } else if (pwd.length >= 6)
        message.innerHTML = ""
}

function store() {
    var email = document.getElementById('email');
    var pwd = document.getElementById('password');
    var forgotClose = document.getElementById('forgotClose');
    var message = document.getElementById('Message');
    var alertmessage = document.getElementById('alertMessage');
    message.innerHTML = "";
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var greyColor = "#333";
    alertmessage.style.backgroundColor = greyColor;
    if (fname == 1) {

        if (lname == 1) {


            if (userEmail == 1) {

                if (userPassword == 1) {

                    if (userPhoneNumber == 1) {

                        var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
                        var newItem = {
                            'email': email.value,
                            'password': pwd.value
                        };

                        oldItems.push(newItem);

                        localStorage.setItem('itemsArray', JSON.stringify(oldItems));
                        message.style.color = goodColor;
                        message.innerHTML = "You have registered successfully. Please sign in to continue.";
                        forgotClose.style.color = goodColor;
                        forgotClose.style.visibility = 'visible';
                        setTimeout(reDirect, 2000);
                    } else {
                        document.getElementById("phoneNumber").focus();
                        return false;
                    }


                } else {
                    document.getElementById("password").focus();
                    return false;
                }

            } else {
                document.getElementById("email").focus();
                return false;
            }


        } else {
            document.getElementById("lastName").focus();
            return false;
        }


    } else {
        document.getElementById("firstName").focus();
        return false;
    }

}

function reDirect() {
    location.href = 'sign_in.html';
}