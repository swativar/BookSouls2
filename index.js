// automatic slideshow off //
$(document).ready(function(){
	$("#demo").carousel({
		interval : false
	});
});

var buttons = document.querySelectorAll('.category');
console.log(buttons);
buttons.forEach(function(button){
    button.onclick = function(e){
    
     console.log(e.target.classList);
     var classlist = e.target.classList;
     var lastclass = classlist[classlist.length-1];
     console.log(lastclass);
     if(lastclass !== 'all'){
        for (var i=1; i<6; i++){
            document.querySelectorAll('.art'+i)[1].style.display="none";
        }
     document.querySelectorAll('.'+lastclass)[1].style.display = "block";
     }
    else{
       for (var i=1; i<6; i++){
           document.querySelectorAll('.art'+i)[1].style.display="block";
       }
    }
    }
});
