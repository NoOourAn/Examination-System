

//////////////////////////////////////////////////////////////////////

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  //////////////////////////////////////////////////////////////////
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' '){
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    //////////////////////////////////////////////////////////////////
  
    function deleteCookie(name) {
      if(getCookie(name)){
        document.cookie = name + "=AAAAAAA;expires=Thu, 01 Jan 1000 00:00:01 GMT";
      }
    }
    //////////////////////////////////////////////////////////////////
  
    function checkCookie() {
      var email = getCookie("email");
      if (email != "") {
          return true;
    } else {
        return false;
      }
    }
    //////////////////////////////////////////////////////////////////
  
    function hasCookie(cookiename){
  
      if(getCookie(cookiename) == "")
          return false;
    
      return true; 
    }
    //////////////////////////////////////////////////////////////////
    function allCookieList(){
      var list=document.cookie.split(';');
      console.log(list);
      return list;
  }