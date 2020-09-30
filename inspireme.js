

$('#page-header').carousel({ interval: 2500 });
$('#tab-home').carousel({ interval: false, wrap: false });

$("#page-header").on("touchstart", function (event) {
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

var tot_item = document.querySelectorAll('.tab-content-home .carousel-item').length;
$("#tab-home").on('slid.bs.carousel', function (event) {
  if (event.to === tot_item - 1) {
    var next = document.querySelector('.next');
    next.style.backgroundColor = '#fff';
    next.style.border = '1px solid #FFDE00';
    next.style.cursor = 'default';
    var aTag = document.querySelector('.next span');
    aTag.style.color = "#FFDE00";
  } else {
    var next = document.querySelector('.next');
    next.style.backgroundColor = '#FFDE00';
    next.style.border = 'none';
    next.style.cursor = 'pointer';
    var aTag = document.querySelector('.next span');
    aTag.style.color = "#042330";
  }
  if (event.from === 0 || event.to !== 0) {
    var prev = document.querySelector('.previous');
    prev.style.backgroundColor = '#FFDE00';
    prev.style.border = 'none';
    prev.style.cursor = "pointer";
    var aTag = document.querySelector('.previous span');
    aTag.style.color = "#042330";
  } else {
    var prev = document.querySelector('.previous');
    prev.style.backgroundColor = '#fff';
    prev.style.border = '1px solid #FFDE00';
    prev.style.cursor = "default";
    var aTag = document.querySelector('.previous span');
    aTag.style.color = "#FFDE00";
  }
});