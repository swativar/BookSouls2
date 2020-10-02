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

var cat_cards = document.querySelectorAll('.view-cat-card');
var cat_cards_len = cat_cards.length-1;

cat_cards.forEach(function(cat_card){
    cat_card.addEventListener('mouseenter',function(event){
        var target_element = event.target.children;
        var last_element = target_element[target_element.length-1].children[0];
        console.log(last_element);
        last_element.src= "assets-article/Right-Arrow-Active.svg";
    });
    cat_card.addEventListener('mouseleave',function(event){
        var target_element = event.target.children;
        var last_element = target_element[target_element.length-1].children[0];
        console.log(last_element);
        last_element.src= "assets-article/Right-Arrow-Not-Active.svg";
    });
})

$('#header-cara').carousel({interval:2500});

$("#header-cara").on("touchstart", function(event){
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

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");   
    console.log(lazyloadImages);
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});