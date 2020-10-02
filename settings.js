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
var save = document.querySelector('.js-settings-save');
edit_link.onclick = function(){

    var inputs = document.getElementsByClassName('disabled-input-class');
    for(var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
    }
    save.style.opacity = '1';
    save.style.filter  = 'alpha(opacity=100)'; // IE fallback
}

var delete_icon = document.querySelector('.settings-delete-icon');
var unsubscribe = delete_icon.parentNode;

delete_icon.onclick = function(){
   unsubscribe.remove();
   if(save.style.opacity !== 1){
    save.style.opacity = '1';
    }
}

var js_visible_save = document.querySelectorAll('.js-visible-save');
js_visible_save.forEach(function(save_visible){
    save_visible.onchange = function(){
        
        if(save.style.opacity !== 1){
            save.style.opacity = '1';
        }
    }
});