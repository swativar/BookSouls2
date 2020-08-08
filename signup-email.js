document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible";
        document.documentElement.style.overflow = 'hidden';
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible";
        document.documentElement.style.overflow = 'auto'; 
    } 
};


function toggleText(elem){
   if(elem.getAttribute('src') === "assets-SignIn-SignOut/EyeClosed.svg"){
    elem.setAttribute('src',"assets-SignIn-SignOut/EyeOpen.svg" );
    elem.nextElementSibling.setAttribute("type","text");
   }else{
    elem.setAttribute('src',"assets-SignIn-SignOut/EyeClosed.svg" ); 
    elem.nextElementSibling.setAttribute("type","password"); 
   };
}

var form = document.querySelector('.join-form');
var arrow = document.querySelector('.back_arrow p');
form.style.display = "none";
arrow.style.display = "none";

function signinEmail(elem){
    elem.parentElement.style.display = "none";
    form.style.display = "block";
    arrow.style.display = "block";
}

var links = document.querySelector('.links-container');
function signin(elem){
    links.style.display = "block";
    elem.style.display = "none";
    form.style.display = "none";
}
