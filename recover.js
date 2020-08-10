function toggleText(elem){
    if(elem.getAttribute('src') === "assets-SignIn-SignOut/EyeClosed.svg"){
     elem.setAttribute('src',"assets-SignIn-SignOut/EyeOpen.svg" );
     elem.nextElementSibling.setAttribute("type","text");
    }else{
     elem.setAttribute('src',"assets-SignIn-SignOut/EyeClosed.svg" ); 
     elem.nextElementSibling.setAttribute("type","password"); 
    };
 }