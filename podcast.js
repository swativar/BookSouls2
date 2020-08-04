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
  $('#page-header').carousel({interval:2500});
  $('#pod-tab-home').carousel({interval:false,wrap:false});
  $('#pod-recom').carousel({interval:false,wrap:false});
  $('#pod-genre').carousel({interval:false,wrap:false});

  var tot_item = document.querySelectorAll('#pod-tab-home .carousel-item').length;
  $("#pod-tab-home").on('slid.bs.carousel', function(event){
      if (event.to === tot_item-1){
        var next = document.querySelector('.next');
        next.style.backgroundColor = '#fff';
        next.style.border = '1px solid #FFDE00';
        var aTag = document.querySelector('.next a');
        aTag.style.color = "#FFDE00";
        aTag.style.cursor = "default";
      }else{
        var next = document.querySelector('.next');
        next.style.backgroundColor = '#FFDE00';
        next.style.border = 'none';
        var aTag = document.querySelector('.next a');
        aTag.style.color = "#042330";
        aTag.style.cursor = "pointer";
      }
      if (event.from === 0){
        var prev = document.querySelector('.previous');
        prev.style.backgroundColor = '#FFDE00';
        prev.style.border = 'none';
        var aTag = document.querySelector('.previous a');
        aTag.style.color = "#042330";
        aTag.style.cursor = "pointer";
      }else{
        var prev = document.querySelector('.previous');
        prev.style.backgroundColor = '#fff';
        prev.style.border = '1px solid #FFDE00';
        var aTag_prev = document.querySelector('.previous a');
        aTag_prev.style.color = "#FFDE00";
        aTag_prev.style.cursor = "default";
      }
  });

  var tot_item_recom = document.querySelectorAll('#pod-recom .carousel-item').length;
  $("#pod-recom").on('slid.bs.carousel', function(event){
      if (event.to === tot_item_recom-1){
        var next_recom = document.querySelector('#pod-recom .next');
        next_recom.style.backgroundColor = '#fff';
        next_recom.style.border = '1px solid #FFDE00';
        var aTag_recom = document.querySelector('#pod-recom .next a');
        aTag_recom.style.color = "#FFDE00";
        aTag_recom.style.cursor = "default";
      }else{
        var next_recom = document.querySelector('#pod-recom .next');
        next_recom.style.backgroundColor = '#FFDE00';
        next_recom.style.border = 'none';
        var aTag_recom = document.querySelector('#pod-recom .next a');
        aTag_recom.style.color = "#042330";
        aTag_recom.style.cursor = "pointer";
      }
      if (event.from === 0){
        var prev_recom = document.querySelector('#pod-recom .previous');
        prev_recom.style.backgroundColor = '#FFDE00';
        prev_recom.style.border = 'none';
        var aTag_prev_recom = document.querySelector('#pod-recom .previous a');
        aTag_prev_recom.style.color = "#042330";
        aTag_prev_recom.style.cursor = "pointer";
      }else{
        var prev_recom = document.querySelector('#pod-recom .previous');
        prev_recom.style.backgroundColor = '#fff';
        prev_recom.style.border = '1px solid #FFDE00';
        var aTag_prev_recom = document.querySelector('#pod-recom .previous a');
        aTag_prev_recom.style.color = "#FFDE00";
        aTag_prev_recom.style.cursor = "default";
      }
  });

  var tot_item_genre = document.querySelectorAll('#pod-genre .carousel-item').length;
  $("#pod-genre").on('slid.bs.carousel', function(event){
      if (event.to === tot_item_recom-1){
        var next_genre = document.querySelector('#pod-genre .next');
        next_genre.style.backgroundColor = '#fff';
        next_genre.style.border = '1px solid #FFDE00';
        var aTag_genre = document.querySelector('#pod-genre .next a');
        aTag_genre.style.color = "#FFDE00";
        aTag_genre.style.cursor = "default";
      }else{
        var next_genre = document.querySelector('#pod-genre .next');
        next_genre.style.backgroundColor = '#FFDE00';
        next_genre.style.border = 'none';
        var aTag_genre = document.querySelector('#pod-genre .next a');
        aTag_genre.style.color = "#042330";
        aTag_genre.style.cursor = "pointer";
      }
      if (event.from === 0){
        var prev_genre = document.querySelector('#pod-genre .previous');
        prev_genre.style.backgroundColor = '#FFDE00';
        prev_genre.style.border = 'none';
        var aTag_prev_genre = document.querySelector('#pod-genre .previous a');
        aTag_prev_genre.style.color = "#042330";
        aTag_prev_genre.style.cursor = "pointer";
      }else{
        var prev_genre = document.querySelector('#pod-genre .previous');
        prev_genre.style.backgroundColor = '#fff';
        prev_genre.style.border = '1px solid #FFDE00';
        var aTag_prev_genre = document.querySelector('#pod-genre .previous a');
        aTag_prev_genre.style.color = "#FFDE00";
        aTag_prev_genre.style.cursor = "default";
      }
  });


