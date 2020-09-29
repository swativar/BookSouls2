function toggleText(elem){
    if(elem.getAttribute('src') === "assets-SignIn-SignOut/EyeClosed.svg"){
     elem.setAttribute('src',"assets-SignIn-SignOut/EyeOpen.svg" );
     elem.nextElementSibling.setAttribute("type","text");
    }else{
     elem.setAttribute('src',"assets-SignIn-SignOut/EyeClosed.svg" ); 
     elem.nextElementSibling.setAttribute("type","password"); 
    };
 }

var edit_link = document.querySelector('.edit-link a');
console.log(edit_link);

edit_link.onclick = function(){
    console.log("entered");
    var inputs = document.getElementsByClassName('disabled-input-class');
    for(var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
    }
}

var delete_icon = document.querySelector('.settings-delete-icon');
var unsubscribe = document.querySelector('.unsubscribe-newsletter');
delete_icon.onclick = function(){
    console.log("unsubs");
   unsubscribe.remove();
}