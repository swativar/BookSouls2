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

var items = document.querySelectorAll('.item');
var first_item = items[0];
var last_item = items[items.length-1];
var first_clone = first_item.cloneNode('true');
var last_clone = last_item.cloneNode('true');
console.log(first_clone,last_clone);
var last_slide = document.querySelector('#demoe');
var first_slide = document.querySelector('#demoa');
last_slide.appendChild(first_clone);
first_slide.prepend(last_clone);

var podcast = document.querySelectorAll('.js_pod');
var first_pod = podcast[0];
var last_pod = podcast[podcast.length-1];
var first_pod_clone = first_pod.cloneNode('true');
var last_pod_clone = last_pod.cloneNode('true');
var last_pod_slide = document.querySelector('#podcast_in5');
var first_pod_slide = document.querySelector('#podcast_in1');
first_pod_slide.prepend(last_pod_clone);

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

