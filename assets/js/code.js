function signInFuntion() {
  debugger
  let Uname = document.getElementById("username").value;
  let Pass = document.getElementById("password").value;

  if (Uname != undefined && Uname != '') {
    document.getElementById("username").style.border = "thin solid gray";
    document.getElementById("errorUsername").style.display = "none";
   
  } else {
    document.getElementById("username").style.border = "thin solid red";
    document.getElementById("errorUsername").style.display = "block";
    
  }
  if (Pass != undefined && Pass != '')
  {
    document.getElementById("password").style.border = "thin solid gray"; 
    document.getElementById("errorPassword").style.display = "none";
    
  } else
  {
    document.getElementById("password").style.border = "thin solid red"; 
    document.getElementById("errorPassword").style.display = "block";
    
  }


  if (Uname != undefined && Uname != '' && Pass != undefined && Pass != '') {
    if (Uname === "admin" && Pass === "admin") {
      location.replace("home.html")
    } else {
      alert("invalid credential please, try again");
      Uname = document.getElementById("username").value = "";
      Pass = document.getElementById("password").value = "";
      
    }
  }

}

