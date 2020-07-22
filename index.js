var color = window.getComputedStyle(
	document.querySelector('header'), ':before'
).getPropertyValue('right');
console.log(color);

var header_explore = document.querySelector('#header_explore');

header_explore.onclick = function scroll(){
    var article = document.querySelector('#scroll_article')
    var top = article.getBoundingClientRect().top-50;
    window.scrollBy(0,top);
    /*$('body,html').animate({
        scrollTop: top
      }, 800,
    
      );*/
}

