if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("registered!");
        console.log(registration);
    }).catch((err) => {
        console.log("registeration failed!");
        console.log(err);
    });
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

var search = document.querySelector('.search');
search.style.display = "none";

function searchPage(){
    search.style.display = "block";
    document.documentElement.className += 'scroll-visibility'; 
}

function allPage(){
    search.style.display = "none";
    document.documentElement.className = document.documentElement.className.replace('scroll-visibility','');
}

//
$("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('html').toggleClass("offcanvas-active");
    $('html').css('overflow', 'hidden');
});

// close button 
$(".btn-close").click(function (e) {
    if( e.target.parentNode.className !== 'navbar-toggler'){
    $(".navbar-collapse").removeClass("show");
    $("html").removeClass("offcanvas-active");
    $('html').css('overflow', 'auto');
    }
});
var html = document.querySelector('html');
window.onclick = function (e) {
    if(e.target === html){
        $(".navbar-collapse").removeClass("show");
        $("html").removeClass("offcanvas-active");
        $('html').css('overflow', 'auto');  
    }
}

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
var preference = document.querySelector('.preference');
preference.style.display = "none";

function preferencePage(){
    preference.style.display = "block";
    document.documentElement.className += 'scroll-visibility'; 
}

function exitPage(){
    preference.style.display = "none";
    document.documentElement.className = document.documentElement.className.replace('scroll-visibility','');
}

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
});

var preference_tags_scroll = document.querySelector('.preference-tags-scroll');
var preference_next_arrows = document.querySelector('.preference-next-arrows');
var pre_next_arrows = document.querySelector('.pre-next-arrows')
pre_next_arrows.onmouseenter = function(){
    preference_tags_scroll.style.overflowX = 'scroll';
    preference_tags_scroll.scrollTo(preference_tags_scroll.scrollWidth,0);
    preference_next_arrows.style.display='none';
}
preference_tags_scroll.onmousewheel = function(){
    preference_tags_scroll.style.overflowX = 'scroll';
    preference_next_arrows.style.display='none';
}

function searchResult(){
    if (event.keyCode === 13){
    window.location = "searchresult.html";
    }
}