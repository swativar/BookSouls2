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
  $('#tab-home').carousel({interval:false,wrap:false});

  $("#page-header").on("touchstart", function(event){
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

  var tot_item = document.querySelectorAll('.tab-content-home .carousel-item').length;
  $("#tab-home").on('slid.bs.carousel', function(event){
      if (event.to === tot_item-1){
        var next = document.querySelector('.next');
        next.style.backgroundColor = '#fff';
        next.style.border = '1px solid #FFDE00';
        next.style.cursor = 'default';
        var aTag = document.querySelector('.next span');
        aTag.style.color = "#FFDE00";
      }else{
        var next = document.querySelector('.next');
        next.style.backgroundColor = '#FFDE00';
        next.style.border = 'none';
        next.style.cursor = 'pointer';
        var aTag = document.querySelector('.next span');
        aTag.style.color = "#042330";
      }
      if (event.from === 0 || event.to !== 0){
        var prev = document.querySelector('.previous');
        prev.style.backgroundColor = '#FFDE00';
        prev.style.border = 'none';
        prev.style.cursor = "pointer";
        var aTag = document.querySelector('.previous span');
        aTag.style.color = "#042330";
      }else{
        var prev = document.querySelector('.previous');
        prev.style.backgroundColor = '#fff';
        prev.style.border = '1px solid #FFDE00';
        prev.style.cursor = "default";
        var aTag = document.querySelector('.previous span');
        aTag.style.color = "#FFDE00";
      }
  });