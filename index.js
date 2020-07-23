
var header_explore = document.querySelector('#header_explore');

header_explore.onclick = function scroll(){
    var article = document.querySelector('#scroll_article')
    var top = article.getBoundingClientRect().top-50;
    window.scrollBy(0,top);
}

/*document.body.classList.add('js-loading');
window.addEventListener('load', showAnimation());

function showAnimation(){
    document.body.classList.remove('js-loading');
}*/

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
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
};


