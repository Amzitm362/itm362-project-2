function info() 
{
    document.getElementById('myimage').src = "project-2-images/iitcamp.jpg";
}

function validation()
{
var a = document.form.name.value;
var b = document.form.password.value;
if(a=="")
{
alert("Please Enter Your Name");
document.form.name.focus();
return false;
}

if(b=="")
{
alert("Please Enter the password");
document.form.password.focus();
return false;
}
}

function stoplogo() {
    document.getElementById('myimage').src = "project-2-images/hawklogo.jpg";
}


function helpfunction() {
    var txt;
    var hawkemail = prompt("Please enter your Email address to receive help:", "@hawk.iit.edu");
    if (hawkemail == null || hawkemail== "") {
        txt = "You have cancelled the prompt. If you still need help please call IIT One Stop (312)-567-3810";
    } else {
        txt = "Please check your hawk email address as an email has been sent out to  " + hawkemail ;
    }
    document.getElementById("help").innerHTML = txt;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
