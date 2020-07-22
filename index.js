$(document).ready(function () {
    $("#article").carousel({
        interval: false
    });
    $("#quick").carousel({
        interval: false
    });
    $("#publisher").carousel({
        interval: false
    });

})

var color = window.getComputedStyle(
	document.querySelector('header'), ':before'
).getPropertyValue('right');
console.log(color);

header = document.querySelector('header');

function scroll(){
    var article = document.querySelector('#scroll_article')
    var top = article.getBoundingClientRect().top;
    window.scrollBy(0,top);
    /*$('body,html').animate({
        scrollTop: top
      }, 800,
    
      );*/
}

setTimeout(scroll,7000);

