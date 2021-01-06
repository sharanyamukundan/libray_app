var lname = document.getElementById("lname");
var fname = document.getElementById("fname");
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var cpwd = document.getElementById("cpwd");
var phn = document.getElementById("phone");
function validate(){
    let reg =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let patt =/^([A-Za-z0-9]+){8,}$/;
    let num=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let n=/^[0-9]{10,10}$/;
    if(lname.value==""||fname.value==""||email.value==""||pwd.value==""||cpwd.value==""||phn.value=="")
    {
        alert("No field should be empty!");
        return false;
    }
    else if(reg.test(email.value)==false){
        alert("Enter a valid email!");
        return false;
    }
    else if(patt.test(pwd.value)==false){
        alert("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        return false;
    }
    else if(pwd.value!=cpwd.value){
        alert("Passwords should match");
        pwd.style.border="2px solid red ";
        cpwd.style.border="2px solid red ";
        return false;
    }
    else if(pwd.value.length<8){
        alert("Too short!");
        pwd.style.border="2px solid red";
    }
    else if(pwd.value.length>8 && pwd.value.length<12){
        alert("Average!");
        pwd.style.border="2px solid orange";

    }
    else if(pwd.value.length>=12){
        alert("Strong!");
        pwd.style.border="2px solid green";
    }
    else if(num.test(phn.value)==false && n.test(phn.value)==false){
        alert("Enter valid phone number!")
        phn.style.border="2px solid red ";
        return false;
    }
    else{
        return true;
    }
}