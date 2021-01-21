var form = document.forms["regform"];
var fullname = form["username"];
var email =  form["email"];
var password = form["psw"];
var password2 = form["psw-repeat"];

fullname.onkeypress = function(e){
    if(e.charCode >= 48 && e.charCode <= 57)
        e.preventDefault();
};

function validateEmail(email){
    var check = email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return check;
};
function validatePassword(password,password2)
{   var check;
    if(password.value===password2.value)
    return check=true;
    else 
    return check=false;
};

form.onsubmit = function(e){

    var spans = document.getElementsByTagName("span");
    for(var i =0;i<3;i++){
        spans[i].style.display = "none";
    }
    e.preventDefault();
    if(validateEmail(email.value) && fullname.value != "" && password.value.length>7 && validatePassword(password,password2)){
        
        SuccReg();
        location.replace("Login.html");
    }
    else{

        if(fullname.value == ""){
            spans[0].style.display = "inline";
        }
        if(!validateEmail(email.value)){
            spans[1].style.display = "inline";
        }
        if(password.value.length<7){
            spans[2].style.display = "inline";
        }
        if( !validatePassword(password,password2)){
            spans[3].style.display = "inline";
        }
    }
};