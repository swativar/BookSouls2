import { Workbox , messageSW } from 'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-window.prod.mjs';

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").then(registration => {
            console.log("registered!");
            console.log(registration);
        }).catch((err) => {
            console.log("registeration failed!");
            console.log(err);
        });
    })
}

navigator.serviceWorker.addEventListener('message', async (event) => {
    if (event.data.meta === 'workbox-broadcast-update') {
        const {cacheName, updatedURL} = event.data.payload;
        const cache = await caches.open(cacheName);
        const updatedResponse = await cache.match(updatedURL);
        const updatedText = await updatedResponse.text();
    }
});

if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');
    let registration;

    const showSkipWaitingPrompt = (event) => {
        const prompt = createUIPrompt({
            onAccept: async () => {
                wb.addEventListener('controlling', (event) => {
                    window.location.reload();
                });

                if (registration && registration.waiting) {
                    messageSW(registration.waiting, { type: 'SKIP_WAITING' });
                }
            },

            onReject: () => {
                prompt.dismiss();
            }
        });
    };
    wb.addEventListener('waiting', showSkipWaitingPrompt);
    wb.addEventListener('externalwaiting', showSkipWaitingPrompt);

    wb.register().then((r) => registration = r);
}

var header_explore = document.querySelector('#header_explore');

header_explore.onclick = function scroll() {
    var article = document.querySelector('#scroll_article');
    if (screen.width >= 575) {
        var top = article.getBoundingClientRect().top - 50;
    } else {
        var top = article.getBoundingClientRect().top - 100;
    }
    window.scrollBy(0, top);
}

var before_loadtime = new Date().getTime();
window.onload = Pageloadtime;
function Pageloadtime() {
    var aftr_loadtime = new Date().getTime();
    // Time calculating in seconds  
    var pgloadtime = (aftr_loadtime - before_loadtime) / 1000;
    console.log(pgloadtime);
    var navbar_brand = document.querySelector('.navbar-brand');
    var header_illus1 = document.querySelector('.header_illustration img:first-child');
    var header_illus2 = document.querySelector('.header_illustration img:last-child');
    var header_content = document.querySelector('.header_content');
    navbar_brand.style.animationDelay = pgloadtime + 's';
    header_illus1.style.animationDelay = pgloadtime + 's';
    header_illus2.style.animationDelay = pgloadtime + 's';
    header_content.style.animationDelay = pgloadtime + 's';
}

document.onreadystatechange = function () {
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

$("#quick").carousel({ interval: 2500 });
$("#publisher").carousel({ interval: 2500 });
$("#podcast").carousel({ interval: 2500 });
$("#article").carousel({ interval: 2500 });

$("#podcast,#publisher,#quick").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).on("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
            $(this).carousel('next');
        }
        else if (Math.floor(xClick - xMove) < -5) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});

var search = document.querySelector('.search');
search.style.display = "none";

function searchPage() {
    search.style.display = "block";
    document.documentElement.className += 'scroll-visibility';
}

function allPage() {
    search.style.display = "none";
    document.documentElement.className = document.documentElement.className.replace('scroll-visibility', '');
}

var preference = document.querySelector('.preference');
preference.style.display = "none";

function preferencePage() {
    preference.style.display = "block";
    document.documentElement.className += 'scroll-visibility';
}

function exitPage() {
    preference.style.display = "none";
    document.documentElement.className = document.documentElement.className.replace('scroll-visibility', '');
}

//
$("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $('html').css('overflow', 'hidden');
});

// close button 
var body = document.querySelector('body');
$(".btn-close").click(function (e) {
    if (e.target.parentNode.className !== 'navbar-toggler') {
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");
        $('html').css('overflow', 'auto');
    }
});
// close collapsible navbar by clicking outside of it
window.onclick = function (e) {
    if (e.target === body) {
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");
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
var preferences = document.querySelectorAll('.preference-tag-box input');
var preferences_box = document.querySelectorAll('.preference-tag-box');
preferences.forEach(function (preference) {
    preference.onclick = function (e) {
        if (e.target.checked) {
            e.target.parentNode.parentNode.style.backgroundColor = '#fff';
            e.target.parentNode.parentNode.style.border = '2px solid #ffde00';
        } else {
            e.target.parentNode.parentNode.style.backgroundColor = '#eceaea';
            e.target.parentNode.parentNode.style.border = '2px solid transparent';
        }
    }
});

preferences_box.forEach(function (preference_box) {
    preference_box.onclick = function (e) {
        var input = document.querySelector('#' + e.currentTarget.children[0].children[0].id);
        if (input.checked) {
            input.checked = false;
            preference_box.style.backgroundColor = '#eceaea';
            preference_box.style.border = '2px solid transparent';
        } else {
            input.checked = true;
            preference_box.style.backgroundColor = '#fff';
            preference_box.style.border = '2px solid #ffde00';
        }
    }
})

var preference_tags_scroll = document.querySelector('.preference-tags-scroll');
var preference_next_arrows = document.querySelector('.preference-next-arrows');
var pre_next_arrows = document.querySelector('.pre-next-arrows')
pre_next_arrows.onmouseenter = function () {
    preference_tags_scroll.style.overflowX = 'scroll';
    preference_tags_scroll.scrollTo(preference_tags_scroll.scrollWidth, 0);
    preference_next_arrows.style.display = 'none';
}
preference_tags_scroll.onmousewheel = function () {
    preference_tags_scroll.style.overflowX = 'scroll';
    preference_next_arrows.style.display = 'none';
}

function searchResult() {
    if (event.keyCode === 13) {
        window.location = "searchresult.html";
    }
}

(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
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

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});