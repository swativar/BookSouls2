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

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    console.log(slides);
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         $('.fade_e').removeClass('slider');
//         console.log($('.fade_e').attr("style"));
//     } else {
//         $('.fade_e').addClass('slider');
//         showSlides(slideIndex);
//     }
//   }
  
  //var x = window.matchMedia("(max-width: 600px)");
 // myFunction(x) // Call listener function at run time