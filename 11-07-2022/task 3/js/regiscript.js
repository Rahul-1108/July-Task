$(document).ready(function(){
    $(".comerror").hide();
    let fnameerror,lnameerror,usererror,emailerror,passerror,cpasserror,numerror,conerror,generror,hoberror = true;

    $("#fname").keyup(function () { fname(); });
    $("#lname").keyup(function () { lname(); });
    $("#username").keyup(function () { uname(); });
    $("#email").keyup(function () { email(); });
    $("#password").keyup(function () { password(); });
    $("#conpassword").keyup(function () { conpassword(); });
    $("#number").keyup(function () { number(); });
    $("#country").change(function () { country(); });
    $("input[name='gender']").click(function () { gender(); });
    $("input[name='hobbies']").change(function () { hobby(); });

    function fname() {
        let nameReg = /^[A-Za-z\s]+$/;
        let fname = $("#fname").val();
        if (fname.length == "" || !nameReg.test(fname)) {
            $("#fnameerror").show();
            fnameerror = false;
            return false;
        }else {
            $("#fnameerror").hide();
            fnameerror = true;
        }
    }

    function lname() {
        let nameReg = /^[A-Za-z\s]+$/;
        let lname = $("#lname").val();
        if (lname.length == "" || !nameReg.test(lname)) {
            $("#lnameerror").show();
            lnameerror = false;
            return false;
        }else {
            $("#lnameerror").hide();
            lnameerror = true;
        }
    }

    function uname() {
        let nameReg = /^[A-Za-z\s]+$/;
        let uname = $("#username").val();
        if (uname.length == "" || !nameReg.test(uname)) {
            $("#usererror").show();
            usererror = false;
            return false;
        }else {
            $("#usererror").hide();
            usererror = true;
        }
    }

    function email() {
        let emailReg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let email = $("#email").val();
        if (!emailReg.test(email)) {
            $("#emailerror").show();
            emailerror = false;
            return false;
        }else {
            $("#emailerror").hide();
            emailerror = true;
        }
    }

    function password() {
        var pswReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])[a-zA-Z0-9!@#\$%\^&\*]{6,16}$/;
        let password = $("#password").val();
        if (password.length == "" || password.length < 3 || password.length > 10 || !pswReg.test(password)) {
            $("#passerror").show();
            passerror = false;
            return false;
        }else {
            $("#passerror").hide();
            passerror = true;
        }
    }

    function conpassword() {
        let password = $("#password").val();
        let conpassword = $("#conpassword").val();
        if (password != conpassword) {
            $("#cpasserror").show();
            cpasserror = false;
            return false;
        }else {
            $("#cpasserror").hide();
            cpasserror = true;
        }
    }

    function number() {
        var phoneReg = /^\d{10}$/;
        let number = $("#number").val();
        if (!phoneReg.test(number)) {
            $("#numerror").show();
            numerror = false;
            return false;
        }else {
            $("#numerror").hide();
            numerror = true;
        }
    }

    function country() {
        var country = $('#country').find(":selected").val();
        if (country == "selectcountry") {    
            $("#conerror").show();
            conerror = false;
            return false;  
        }else{ $("#conerror").hide();     
        conerror = true;
        }    
    }

    function gender() {
        if ($("input[name='gender']:checked").length == 0) {    
            $("#generror").show();
            generror = false;
            return false;  
        }else{ $("#generror").hide(); 
        generror = true;
        }    
    }

    function hobby() {
        if ($("input[name='hobbies']:checked").length == 0) {    
            $("#hoberror").show();
            hoberror = false;
            return false;  
        }else{ $("#hoberror").hide(); 
        hoberror = true;
        }    
    }

    $("#submit").click(function () {

        fname();
        lname();
        uname();
        email();
        password();
        conpassword();
        number();
        country();
        gender();
        hobby();

        if ( fnameerror == true && lnameerror == true && usererror == true && emailerror == true && passerror == true && cpasserror == true && numerror == true && conerror == true && generror == true && hoberror == true) {
            setTimeout(function() {window.location = "wel.html" });
        //     return false;
        // return false;
        }
        else{
            return false;
        }
    });
});