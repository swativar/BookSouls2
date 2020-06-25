var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("button");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    /*var fade = document.querySelectorAll('#con .button');
    var first = fade[0];
    var last = fade[fade.length-1];
    var style_first = getComputedStyle(first);
    var style_last = getComputedStyle(last);
    if(style_last.display==="block"){
    document.querySelector('.next span').style.display = "none";
    }else{
    document.querySelector('.next span').style.display = "inline";    
    }
    if(style_first.display==="block"){
        document.querySelector('.prev span').style.display = "none";
        }else{
        document.querySelector('.prev span').style.display = "inline";    
        }*/
}

var buttons = document.querySelectorAll('.button button');
var button_array = Array.from(buttons);
console.log(button_array);
button_array.forEach(function (button) {
    button.onclick = function (e) {
        document.getElementById('religion').style.display = "none";
        document.getElementById('societyandculture').style.display = "none";
        document.getElementById('science').style.display = "none";
        document.getElementById('sexandrelationships').style.display = "none";
        document.getElementById('natureandenviornment').style.display = "none";
        document.getElementById('personaldevelopment').style.display = "none";
        document.getElementById('healthandnutrition').style.display = "none";
        document.getElementById('careerandsuccess').style.display = "none";
        document.getElementById('motivationandinspiration').style.display = "none";
        document.getElementById('parenting').style.display = "none";
        window.name = e.target.innerHTML;
        window.data = window.name;
        document.querySelector('#' + window.name.split(" ").join("").toLowerCase() + ' ' + '.name').innerHTML = window.name;
        document.querySelector('#' + window.name.split(" ").join("").toLowerCase()).style.display = "block";
    }

})
function category() {
    console.log(window.data);
    if (window.data) {
        window.data = window.data.split(" ").join("").toLowerCase();
        console.log(window.data)
        url = 'category.html?name=' + encodeURIComponent(window.data);
        console.log(url)
        document.location.href = url;
    }
    else {
        url = 'category.html?name=societyandculture';
        document.location.href = url;
    }
}

var links = document.getElementsByClassName('content');
var links_arr = Array.from(links);
links_arr.forEach(function (link) {
    link.onclick = function (e) {
        window.book_name = e.target.innerHTML;
        window.id = e.target.id;
        console.log(window.book_name);
        url = 'audio.html?name=' + encodeURIComponent(window.book_name.split(" ").join('-')) + '&id=' + encodeURIComponent(window.id);
        document.location.href = url;
    }
})

function showLogin(){
 $('#mymodal').modal("hide");
}
 function showSignUp(){
        $('#mymodal1').modal("hide");
     }
// automatic slideshow off //
$(document).ready(function(){
	$("#demo").carousel({
		interval : false
	});
});