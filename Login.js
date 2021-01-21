    var form2 = document.forms["loginform"];
    var lemail =  form2["email"];
    var lpassword = form2["psw"];


function isUserTrue(email){
    if(getCookie("email")===email.value)
    return true;
    else
    return false
};

function isPasswordTrue(password){
    if(getCookie("password")===password.value)
    return true;
    else
    return false
};

form2.onsubmit = function(e){

    var spans = document.getElementsByTagName("span");

    for(var i =0;i<1;i++){
        spans[i].style.display = "none";
    }
    e.preventDefault();
    if( isUserTrue(lemail) && isPasswordTrue(lpassword)){
        location.replace("QuestionAndAns/index.html");
    }
    else{
        console.log("fail")

        if(!isUserTrue(lemail)){
            spans[0].style.display = "inline";
        }
        if(!isPasswordTrue(lpassword)){
            spans[1].style.display = "inline";
        }
     
    }
};