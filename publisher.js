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