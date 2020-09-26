$('#tab-genre,#tab-recomm,#tab-popular,#tab-new').carousel({interval:false,wrap:false});
$('#pod-recom').carousel({interval:false,wrap:false});
$('#pod-genre').carousel({interval:false,wrap:false});
$('#quick-books-cara').carousel({interval:2500});

$("#quick-books-cara").on("touchstart", function(event){
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

$("#tab-genre,#tab-recomm,#tab-popular,#tab-new").on('slid.bs.carousel', function (event) {
  var tot_item_genre = document.querySelectorAll('#' + event.target.id + ' .carousel-item').length;
  if (event.to === tot_item_genre-1) {
    document.querySelector('#' + event.target.id + ' .next').style.backgroundColor = '#fff';
    document.querySelector('#' + event.target.id + ' .next').style.border = '1px solid #FFDE00';
    document.querySelector('#' + event.target.id + ' .next span').style.color = "#FFDE00";
    document.querySelector('#' + event.target.id + ' .next').style.cursor = "default";
  } else {
    document.querySelector('#' + event.target.id + ' .next').style.backgroundColor = '#FFDE00';
    document.querySelector('#' + event.target.id + ' .next').style.border = 'none';
    document.querySelector('#' + event.target.id + ' .next span').style.color = "#042330";
    document.querySelector('#' + event.target.id + ' .next').style.cursor = "pointer";
  }
  if (event.from === 0 || event.to !== 0) {
    document.querySelector('#' + event.target.id + ' .previous').style.backgroundColor = '#FFDE00';
    document.querySelector('#' + event.target.id + ' .previous').style.border = 'none';
    document.querySelector('#' + event.target.id + ' .previous span').style.color = "#042330";
    document.querySelector('#' + event.target.id + ' .previous').style.cursor = "pointer";
  } else {
    document.querySelector('#' + event.target.id + ' .previous').style.backgroundColor = '#fff';
    document.querySelector('#' + event.target.id + ' .previous').style.border = '1px solid #FFDE00';
    document.querySelector('#' + event.target.id + ' .previous span').style.color = "#FFDE00";
    document.querySelector('#' + event.target.id + ' .previous').style.cursor = "default";
  }
});

var genre_buttons = document.querySelectorAll('.genre-buttons button');
var len = genre_buttons.length;
console.log(len);
genre_buttons.forEach(function(genre_button){
  genre_button.onclick = function(e){
    for (i = 0; i < len; i++) {
      genre_buttons[i].className = genre_buttons[i].className.replace(" genre-active-button", "");
    }
     e.target.className += " genre-active-button";
  }
})