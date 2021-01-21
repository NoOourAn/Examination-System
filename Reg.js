function SuccReg(){
setCookie("username",fullname.value,"expires=Thu, 20 Dec 2020 12:00:00 UTC;");
setCookie("password",password.value,"expires=Thu, 20 Dec 2020 12:00:00 UTC;");
setCookie("email",email.value,"expires=Thu, 20 Dec 2020 12:00:00 UTC;");
console.log(getCookie("username"));
console.log(getCookie("password"));
console.log(getCookie("email"));
}


allCookieList();
