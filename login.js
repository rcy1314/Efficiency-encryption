var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
let submitbtn = document.getElementById("submitbtn")
submitbtn.addEventListener ("click",validate)
async function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("pass").value;
//if array empty alert name not found in data base


if (password == "Efficiency"){
   alert ("解锁成功");
   window.location = "./GG/index.html"; 
   return false;
    }
    else if(password != "#"){
        alert ("解锁失败");
    }

// Disabling fields after 3 attempts.
if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
}