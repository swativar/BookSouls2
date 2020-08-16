
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
}

function allPage(){
    search.style.display = "none";
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