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

