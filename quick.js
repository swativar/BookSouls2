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


function show(evt, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  console.log(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-li");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " tab-active";
}

var li_s = document.querySelectorAll('.quick-tab-sub-cat > li');
li_s.forEach(function(li){
  li.onclick = function(){
    for (i = 0; i < li_s.length; i++) {
      li_s[i].className = li_s[i].className.replace("quick-sub-active", "");
    }
    li.className += " quick-sub-active";
  }
})

var li_ss = document.querySelectorAll('.quick-tab-cat > li');
var genre_subcat = document.querySelector('.quick-tab-sub-cat');
li_ss.forEach(function(li_s){
  li_s.onclick = function(){
    for (i = 0; i < li_ss.length; i++) {
      li_ss[i].className = li_ss[i].className.replace("quick-active", "");
    }
    li_s.className += " quick-active";
    if(li_s.innerHTML.toLowerCase() === "genre"){
      genre();
      console.log('hi');
    }else{
      genre_subcat.style.display = "none";
    }
  }
})
document.querySelector('.quick-tab-sub-cat').style.display = "none";
function genre(){
  var genre_subcat = document.querySelector('.quick-tab-sub-cat');
  if(genre_subcat.style.display === "none"){
    genre_subcat.style.display = "block";
  }else{
    genre_subcat.style.display = "none";
  }
}

function collapse(event,name){
  var id = document.getElementById(name);
  var title = document.querySelectorAll('.quick-tab-title');
  for (i=0;i<title.length; i++){
    title[i].className = title[i].className.replace(" arrow", "");
  }

  if(id.style.display === "block"){
    id.style.display = "none";
    event.target.className = event.target.className.replace(" arrow","");
    if(event.target.parentNode.nextElementSibling.id === "language"){
      event.target.parentNode.style.borderRadius = "0 0 20px 20px";
    }
  }else{
    id.style.display = "block";
    event.target.className += " arrow";
    if(event.target.parentNode.nextElementSibling.id === "language"){
      event.target.parentNode.style.borderRadius = "0px";
    }
  }
}

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