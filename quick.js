$('#tab-genre,#tab-recomm,#tab-popular,#tab-new').carousel({interval:false,wrap:false});
$('#pod-recom').carousel({interval:false,wrap:false});
$('#pod-genre').carousel({interval:false,wrap:false});

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

var tot_item_genre = document.querySelectorAll('#tab-genre .carousel-item').length;
$("#tab-genre").on('slid.bs.carousel', function(event){
    if (event.to === tot_item_genre-1){
      var next_genre = document.querySelector('#tab-genre .next');
      next_genre.style.backgroundColor = '#fff';
      next_genre.style.border = '1px solid #FFDE00';
      var aTag_genre = document.querySelector('#tab-genre .next a');
      aTag_genre.style.color = "#FFDE00";
      aTag_genre.style.cursor = "default";
    }else{
      var next_genre = document.querySelector('#tab-genre .next');
      next_genre.style.backgroundColor = '#FFDE00';
      next_genre.style.border = 'none';
      var aTag_genre = document.querySelector('#tab-genre .next a');
      aTag_genre.style.color = "#042330";
      aTag_genre.style.cursor = "pointer";
    }
    if (event.from === 0){
      var prev_genre = document.querySelector('#tab-genre .previous');
      prev_genre.style.backgroundColor = '#FFDE00';
      prev_genre.style.border = 'none';
      var aTag_prev_genre = document.querySelector('#tab-genre .previous a');
      aTag_prev_genre.style.color = "#042330";
      aTag_prev_genre.style.cursor = "pointer";
    }else{
      var prev_genre = document.querySelector('#tab-genre .previous');
      prev_genre.style.backgroundColor = '#fff';
      prev_genre.style.border = '1px solid #FFDE00';
      var aTag_prev_genre = document.querySelector('#tab-genre .previous a');
      aTag_prev_genre.style.color = "#FFDE00";
      aTag_prev_genre.style.cursor = "default";
    }
});

var tot_item_recomm = document.querySelectorAll('#tab-recomm .carousel-item').length;
$("#tab-recomm").on('slid.bs.carousel', function(event){
    if (event.to === tot_item_recomm-1){
      var next_genre = document.querySelector('#tab-recomm .next');
      next_genre.style.backgroundColor = '#fff';
      next_genre.style.border = '1px solid #FFDE00';
      var aTag_genre = document.querySelector('#tab-recomm .next a');
      aTag_genre.style.color = "#FFDE00";
      aTag_genre.style.cursor = "default";
    }else{
      var next_genre = document.querySelector('#tab-recomm .next');
      next_genre.style.backgroundColor = '#FFDE00';
      next_genre.style.border = 'none';
      var aTag_genre = document.querySelector('#tab-recomm .next a');
      aTag_genre.style.color = "#042330";
      aTag_genre.style.cursor = "pointer";
    }
    if (event.from === 0){
      var prev_genre = document.querySelector('#tab-recomm .previous');
      prev_genre.style.backgroundColor = '#FFDE00';
      prev_genre.style.border = 'none';
      var aTag_prev_genre = document.querySelector('#tab-recomm .previous a');
      aTag_prev_genre.style.color = "#042330";
      aTag_prev_genre.style.cursor = "pointer";
    }else{
      var prev_genre = document.querySelector('#tab-recomm .previous');
      prev_genre.style.backgroundColor = '#fff';
      prev_genre.style.border = '1px solid #FFDE00';
      var aTag_prev_genre = document.querySelector('#tab-recomm .previous a');
      aTag_prev_genre.style.color = "#FFDE00";
      aTag_prev_genre.style.cursor = "default";
    }
});

var tot_item_popular = document.querySelectorAll('#tab-popular .carousel-item').length;
$("#tab-popular").on('slid.bs.carousel', function(event){
    if (event.to === tot_item_popular-1){
      var next_genre = document.querySelector('#tab-popular .next');
      next_genre.style.backgroundColor = '#fff';
      next_genre.style.border = '1px solid #FFDE00';
      var aTag_genre = document.querySelector('#tab-popular .next a');
      aTag_genre.style.color = "#FFDE00";
      aTag_genre.style.cursor = "default";
    }else{
      var next_genre = document.querySelector('#tab-popular .next');
      next_genre.style.backgroundColor = '#FFDE00';
      next_genre.style.border = 'none';
      var aTag_genre = document.querySelector('#tab-popular .next a');
      aTag_genre.style.color = "#042330";
      aTag_genre.style.cursor = "pointer";
    }
    if (event.from === 0){
      var prev_genre = document.querySelector('#tab-popular .previous');
      prev_genre.style.backgroundColor = '#FFDE00';
      prev_genre.style.border = 'none';
      var aTag_prev_genre = document.querySelector('#tab-popular .previous a');
      aTag_prev_genre.style.color = "#042330";
      aTag_prev_genre.style.cursor = "pointer";
    }else{
      var prev_genre = document.querySelector('#tab-popular .previous');
      prev_genre.style.backgroundColor = '#fff';
      prev_genre.style.border = '1px solid #FFDE00';
      var aTag_prev_genre = document.querySelector('#tab-popular .previous a');
      aTag_prev_genre.style.color = "#FFDE00";
      aTag_prev_genre.style.cursor = "default";
    }
});

var tot_item_new = document.querySelectorAll('#tab-new .carousel-item').length;
$("#tab-new").on('slid.bs.carousel', function(event){
    if (event.to === tot_item_popular-1){
      var next_genre = document.querySelector('#tab-new .next');
      next_genre.style.backgroundColor = '#fff';
      next_genre.style.border = '1px solid #FFDE00';
      var aTag_genre = document.querySelector('#tab-new .next a');
      aTag_genre.style.color = "#FFDE00";
      aTag_genre.style.cursor = "default";
    }else{
      var next_genre = document.querySelector('#tab-new .next');
      next_genre.style.backgroundColor = '#FFDE00';
      next_genre.style.border = 'none';
      var aTag_genre = document.querySelector('#tab-new .next a');
      aTag_genre.style.color = "#042330";
      aTag_genre.style.cursor = "pointer";
    }
    if (event.from === 0){
      var prev_genre = document.querySelector('#tab-new .previous');
      prev_genre.style.backgroundColor = '#FFDE00';
      prev_genre.style.border = 'none';
      var aTag_prev_genre = document.querySelector('#tab-new .previous a');
      aTag_prev_genre.style.color = "#042330";
      aTag_prev_genre.style.cursor = "pointer";
    }else{
      var prev_genre = document.querySelector('#tab-new .previous');
      prev_genre.style.backgroundColor = '#fff';
      prev_genre.style.border = '1px solid #FFDE00';
      var aTag_prev_genre = document.querySelector('#tab-new .previous a');
      aTag_prev_genre.style.color = "#FFDE00";
      aTag_prev_genre.style.cursor = "default";
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
li_ss.forEach(function(li_s){
  li_s.onclick = function(){
    for (i = 0; i < li_ss.length; i++) {
      li_ss[i].className = li_ss[i].className.replace("quick-active", "");
    }
    li_s.className += " quick-active";
  }
})