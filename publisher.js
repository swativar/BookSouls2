$('#tab-trending,#tab-recent,#tab-most-viewed,#tab-recent2').carousel({ interval: false, wrap: false });

$(".carousel").on('slid.bs.carousel', function (event) {
  var tot_item_genre = document.querySelectorAll('#' + event.target.id + ' .carousel-item').length;
  if (event.to === tot_item_genre - 1) {
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

