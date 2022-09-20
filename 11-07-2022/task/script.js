$(document).ready(function(){
    $(".comerror").hide();
    let fnameError,lnameError,unameError,emailidError,passwordError,cnfpasswordError,phoneError,countryError,gendererror,hobbyerror = true;

    $("#fname").keyup(function () { fname(); });
    $("#lname").keyup(function () { lname(); });
    $("#username").keyup(function () { uname(); });
    $("#email").keyup(function () { email(); });
    $("#password").keyup(function () { password(); });
    $("#cnfpassword").keyup(function () { cnfpassword(); });
    $("#mobileno").keyup(function () { mobileno(); });
    $("#country").change(function () { country(); });
    $("input[name='gender']").click(function () { gender(); });
    $("input[name='hobbies']").change(function () { hobbies(); });

    function fname() {
        let nameReg = /^[A-Za-z\s]+$/;
        let fname = $("#fname").val();
        if (fname.length == "" || !nameReg.test(fname)) {
            $("#fnameError").show();
            fnameError = false;
            return false;
        }else {
            $("#fnameError").hide();
            fnameError = true;
        }
    }

    function lname() {
        let nameReg = /^[A-Za-z\s]+$/;
        let lname = $("#lname").val();
        if (lname.length == "" || !nameReg.test(lname)) {
            $("#lnameError").show();
            lnameError = false;
            return false;
        }else {
            $("#lnameError").hide();
            lnameError = true;
        }
    }

    function uname() {
        let nameReg = /^[A-Za-z\s]+$/;
        let uname = $("#username").val();
        if (uname.length == "" || !nameReg.test(uname)) {
            $("#usernameError").show();
            unameError = false;
            return false;
        }else {
            $("#usernameError").hide();
            unameError = true;
        }
    }

    function email() {
        let emailReg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let email = $("#email").val();
        if (!emailReg.test(email)) {
            $("#emailidError").show();
            emailidError = false;
            return false;
        }else {
            $("#emailidError").hide();
            emailidError = true;
        }
    }

    function password() {
        var pswReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])[a-zA-Z0-9!@#\$%\^&\*]{6,16}$/;
        let password = $("#password").val();
        if (password.length == "" || password.length < 3 || password.length > 10 || !pswReg.test(password)) {
            $("#passwordError").show();
            passwordError = false;
            return false;
        }else {
            $("#passwordError").hide();
            passwordError = true;
        }
    }

    function cnfpassword() {
        let password = $("#password").val();
        let cnfpassword = $("#cnfpassword").val();
        if (password != cnfpassword) {
            $("#cnfpasswordError").show();
            cnfpasswordError = false;
            return false;
        }else {
            $("#cnfpasswordError").hide();
            cnfpasswordError = true;
        }
    }

    function mobileno() {

        var phoneReg = /^\d{10}$/;
        let mobileno = $("#mobileno").val();
        if (!phoneReg.test(mobileno)) {
            $("#phoneError").show();
            phoneError = false;
            return false;
        }else {
            $("#phoneError").hide();
            phoneError = true;
        }
    }

    function country() {
        var country = $('#country').find(":selected").val();
        if (country == "selectcounty") {    
            $("#countryError").show();
            countryError = false;
            return false;  
        }else{ $("#countryError").hide();     
            countryError = true;
        }    
    }

    function gender() {
        if ($("input[name='gender']:checked").length == 0) {    
            $("#gendererror").show();
            gendererror = false;
            return false;  
        }else{ $("#gendererror").hide(); 
            gendererror = true;
        }    
    }

    function hobbies() {
        if ($("input[name='hobbies']:checked").length == 0) {    
            $("#hobbyerror").show();
            hobbyerror = false;
            return false;  
        }else{ $("#hobbyerror").hide(); 
            hobbyerror = true;
        }    
    }

    $("#submit").click(function () {
        fname();
        lname();
        uname();
        email();
        password();
        cnfpassword();
        mobileno();
        country();
        gender();
        hobbies();

        if ( fnameError == true && lnameError == true && unameError == true && emailidError == true && passwordError == true && cnfpasswordError == true && phoneError == true && countryError == true && gendererror == true && hobbyerror == true) {
            setTimeout(function() {window.location = "action_page.html" });
            return false;
        } else {
        return false;
        }
    });
});