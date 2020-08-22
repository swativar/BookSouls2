
var header_explore = document.querySelector('#header_explore');

header_explore.onclick = function scroll(){
    var article = document.querySelector('#scroll_article');
    if(screen.width >= 575){
    var top = article.getBoundingClientRect().top-50;
    }else{
    var top = article.getBoundingClientRect().top-100;  
    }
    window.scrollBy(0,top);
}

var before_loadtime = new Date().getTime();  
window.onload = Pageloadtime;  
function Pageloadtime() {  
    var aftr_loadtime = new Date().getTime();  
    // Time calculating in seconds  
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000;
    console.log(pgloadtime);
    var navbar_brand = document.querySelector('.navbar-brand');
    var header_illus1 = document.querySelector('.header_illustration img:first-child');
    var header_illus2 = document.querySelector('.header_illustration img:last-child');
    var header_content = document.querySelector('.header_content');
    navbar_brand.style.animationDelay = pgloadtime+'s';
    header_illus1.style.animationDelay = pgloadtime+'s';
    header_illus2.style.animationDelay = pgloadtime+'s';
    header_content.style.animationDelay = pgloadtime+'s';
}

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

$("#quick").carousel({interval: 2500});
$("#publisher").carousel({interval: 2500});
$("#podcast").carousel({interval: 2500});
$("#article").carousel({interval: 2500});

$("#podcast,#publisher,#quick").on("touchstart", function(event){
    var xClick = event.originalEvent.touches[0].pageX;
$(this).on("touchmove", function(event){
    var xMove = event.originalEvent.touches[0].pageX;
    if( Math.floor(xClick - xMove) > 5 ){
        $(this).carousel('next');
    }
    else if( Math.floor(xClick - xMove) < -5 ){
        $(this).carousel('prev');
    }
});
$(".carousel").on("touchend", function(){
        $(this).off("touchmove");
});
});

var search = document.querySelector('.search');
search.style.display = "none";

function searchPage(){
    search.style.display = "block";
    document.documentElement.style.overflow = 'hidden'; 
}

function allPage(){
    search.style.display = "none";
    document.documentElement.style.overflow = 'auto';
}

var preference = document.querySelector('.preference');
preference.style.display = "none";

function preferencePage(){
    preference.style.display = "block";
    document.documentElement.style.overflow = 'hidden'; 
}

function exitPage(){
    preference.style.display = "none";
    document.documentElement.style.overflow = 'auto';
}

//
$("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close, body").click(function (e) {
    if( e.target.parentNode.className !== 'navbar-toggler'){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
    }
});



var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);

// 
var preferences = document.querySelectorAll('.preference-tag-box input');
var preferences_box = document.querySelectorAll('.preference-tag-box');
preferences.forEach(function (preference){
    preference.onclick = function(e){
        if(e.target.checked){
            e.target.parentNode.parentNode.style.backgroundColor = '#fff';
            e.target.parentNode.parentNode.style.border = '2px solid #ffde00';
        }else{
            e.target.parentNode.parentNode.style.backgroundColor = '#eceaea';
            e.target.parentNode.parentNode.style.border = '2px solid transparent';
        }
    }
});

preferences_box.forEach(function(preference_box){
    preference_box.onclick = function(e){
      var input =  document.querySelector('#' +e.currentTarget.children[0].children[0].id);
      if(input.checked){
       input.checked = false;
       preference_box.style.backgroundColor = '#eceaea';
       preference_box.style.border = '2px solid transparent';
      }else{
          input.checked = true;
          preference_box.style.backgroundColor = '#fff';
          preference_box.style.border = '2px solid #ffde00';
      }
    }
})