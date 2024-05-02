function check() {

    var storedemail;
    var storedpwd;

    var useremail = document.getElementById('email');
    var userpwd = document.getElementById('password');
    var message = document.getElementById('correctUser');
    var user_match = 0;
    var registered_user = 0;

    if (useremail.value != "" && userpwd.value != "") {
        var itemsArray = JSON.parse(localStorage.getItem('itemsArray'));
        for (i = 0; i < itemsArray.length; i++) {
            storedemail = itemsArray[i].email;
            storedpwd = itemsArray[i].password;
            if (useremail.value == storedemail) {
                registered_user = 1;
                if (userpwd.value == storedpwd) {
                    console.log(useremail.value + " " + storedemail);
                    location.href = "../customer/customer.html";
                    user_match = 1;
                }

            }
        }
    }

    if (user_match == 0) {
        console.log(user_match);
        var badColor = "#ff6666";
        message.style.color = badColor;
        message.innerHTML = "Forgot your password ? \n Press the link below.";
    }

    if (registered_user == 0) {
        var message = document.getElementById('correctUser');
        var badColor = "#ff6666";
        message.style.color = badColor;
        message.innerHTML = "Not a registered user ? \n Please sign up.";
    }
}

function remMe() {
    var email = document.getElementById('email');
    var pwd = document.getElementById('password');

    if (document.login.remember.checked == true) {
        var oldItems = JSON.parse(localStorage.getItem('rememberedUsers')) || [];
        var newItem = {
            'email': email.value,
            'password': pwd.value
        };
        oldItems.push(newItem);
        localStorage.setItem('rememberedUsers', JSON.stringify(oldItems));
    }
}

function remUsers() {
    var useremail = document.getElementById('email');
    var rememberedUsers = JSON.parse(localStorage.getItem('rememberedUsers'));

    for (i = 0; i < rememberedUsers.length; i++) {
        if (useremail.value == rememberedUsers[i].email) {
            userpwd = rememberedUsers[i].password;
            document.getElementById('password').value = userpwd;
        }
    }
}

function emailSender() {
    var message = document.getElementById('Message');
    var alertmessage = document.getElementById('alertMessage');
    var useremail = document.getElementById('forgotemail');
    var forgotClose = document.getElementById('forgotClose');
    message.innerHTML = "";
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    var greyColor = "#333";
    var storedemail;
    var storedpwd;
    var registered_user = 0;
    alertmessage.style.backgroundColor = greyColor;
    if (useremail.value != "") {
        var itemsArray = JSON.parse(localStorage.getItem('itemsArray'));
        for (i = 0; i < itemsArray.length; i++) {
            storedemail = itemsArray[i].email;
            if (useremail.value == storedemail) {
                registered_user = 1;
                message.style.color = goodColor;
                message.innerHTML = "A link has been sent to your recovery email-id.";
                forgotClose.style.color = goodColor;
                forgotClose.style.visibility = 'visible';
            }
        }
        if (registered_user == 0) {
            message.style.color = badColor;
            message.innerHTML = "Not a registered user ? Please sign up.";
            forgotClose.style.color = badColor;
            forgotClose.style.visibility = 'visible';
        }
    }
    forgotemail.value = "";
    setTimeout(reFresh, 1500);
}

function reDirect() {
    location.href = 'sign_up.html';
}

function reFresh() {
    location.href = 'sign_in.html';
}