$('#tab-trending,#tab-recent,#tab-most-viewed,#tab-recent2').carousel({interval:false,wrap:false});


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


$(".carousel").on('slid.bs.carousel', function(event){
    var tot_item_genre = document.querySelectorAll('#'+event.target.id+' .carousel-item').length;
    if (event.to === tot_item_genre-1){
      document.querySelector('#'+event.target.id+' .next').style.backgroundColor = '#fff';
      document.querySelector('#'+event.target.id+' .next').style.border = '1px solid #FFDE00';
      document.querySelector('#'+event.target.id+' .next a').style.color = "#FFDE00";
      document.querySelector('#'+event.target.id+' .next a').style.cursor = "default";
    }else{
      document.querySelector('#'+event.target.id+' .next').style.backgroundColor = '#FFDE00';
      document.querySelector('#'+event.target.id+' .next').style.border = 'none';
      document.querySelector('#'+event.target.id+' .next a').style.color = "#042330";
      document.querySelector('#'+event.target.id+' .next a').style.cursor = "pointer";
    }
    if (event.from === 0){
      document.querySelector('#'+event.target.id+' .previous').style.backgroundColor = '#FFDE00';
      document.querySelector('#'+event.target.id+' .previous').style.border = 'none';
      document.querySelector('#'+event.target.id+' .previous a').style.color = "#042330";
      document.querySelector('#'+event.target.id+' .previous a').style.cursor = "pointer";
    }else{
        document.querySelector('#'+event.target.id+' .previous').style.backgroundColor = '#fff';
        document.querySelector('#'+event.target.id+' .previous').style.border = '1px solid #FFDE00';
      document.querySelector('#'+event.target.id+' .previous a').style.color = "#FFDE00";
      document.querySelector('#'+event.target.id+' .previous a').style.cursor = "default";
    }
});