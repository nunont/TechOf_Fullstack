
$(document).ready(function() {

    var prevUsername = localStorage.getItem("username");
    $("#username").val(prevUsername);
    
    

    $("#register").click(function() {
        register();
    });

});

function register() { 
    var email = $("#email").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var age = $("#age").val();

    localStorage.setItem("username", JSON.stringify({
        email: email,
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        age: age
    }));

    if (email == '' || username == '' || password == '' || firstname == '' || lastname == '' || age == '')
    {
        return errorOnRegister("Please fill all fields...!!!!!!");
    }

}

function errorOnRegister(error) {
    $("#error").html(error);
    $("#error").show();
}

