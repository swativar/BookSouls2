$(document).ready(function () {
    $("#demo").carousel({
        interval: false
    });
    $("#demo1").carousel({
        interval: false
    });
    $("#demo2").carousel({
        interval: false
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('shadow');
        } else {
            $('.navbar').removeClass('shadow');
        }
    });
});

(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('images');
    console.log(objects);
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ? 
          item.src = item.dataset.src :        
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  })();

  var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);

var links = document.querySelectorAll('.js_inspire_link');
links.forEach(function(link){
    link.onclick = function(e){
        var length = links.length;
        for (var i=0; i<length; i++){
            links[i].children[0].classList.remove('active');
        }
        console.log(link.children);
        var li = link.children[0];
        console.log(li);
        li.classList.add("active");
    }
});

var pod_links = document.querySelectorAll('.js_pod_link');
pod_links.forEach(function(link){
    link.onclick = function(e){
        var length = pod_links.length;
        for (var i=0; i<length; i++){
            pod_links[i].children[0].classList.remove('active');
        }
        console.log(link.children);
        var li = link.children[0];
        console.log(li);
        li.classList.add("active");
    }
});


// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1);

