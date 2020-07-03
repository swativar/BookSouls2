// automatic slideshow off //
$(document).ready(function(){
	$("#demo").carousel({
		interval : false
	});
});

var buttons = document.querySelectorAll('.category');
buttons.forEach(function(button){
    button.onclick = function(e){
     var classlist = e.target.classList;
     var lastclass = classlist[classlist.length-1];
     if(lastclass !== 'all'){
        for (var i=1; i<6; i++){
            document.querySelectorAll('.art'+i)[1].style.display="none";
            if(i==4){
                document.querySelectorAll('.art'+i)[2].style.display="none";
            }
        }
     document.querySelectorAll('.'+lastclass)[1].style.display = "block";
     if(lastclass==="art4"){
        document.querySelectorAll('.'+lastclass)[2].style.display = "block";
    }
     }
    else{
       for (var i=1; i<6; i++){
           document.querySelectorAll('.art'+i)[1].style.display="block";
       if(i==4){
        document.querySelectorAll('.art'+i)[2].style.display="block";
    }
    }
    }
    }
});
