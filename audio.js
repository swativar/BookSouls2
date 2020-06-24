window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
        console.log(data);
    }
    var title = data.name.split('-').join(' ');
    document.querySelector('.title1').innerHTML = title;
    window.id = data.id;
    document.getElementById(window.id).style.display = "block";
}

var time_jump = document.querySelectorAll('.jump1 p a');
console.log(time_jump);
var time_jump_arr = Array.from(time_jump);
time_jump_arr.forEach(function(jump){
    jump.onclick = function(e){
    console.log(e.target);
   var clip = e.target.innerHTML;
   console.log(clip);
   clip = parseInt(clip);
   var audio = document.querySelector('#'+ window.id + ' ' + '.sound audio');
   audio.src = audio.src+"#t="+clip*60;
   console.log(audio.src);
    }
})

var play_buttons = document.querySelectorAll('.play');
var play_arr = Array.from(play_buttons);
console.log(play_arr);
play_arr.forEach(function(play_button){
    play_button.onclick = function (){
        var button = document.querySelector('#'+ window.id + ' ' + '.sound audio');
        console.log(button);
        button.play();
    }
});

function addComment(){
    var comment = document.getElementById('textarea').value;
    var div = document.createElement('div');
    div.className="mt-2 comment_sec";
    var div1 = document.createElement('div');
    div1.className = "bg-info rounded-circle user"
    var i = document.createElement('i');
    i.className = "fas fa-user fa-lg";
    div1.appendChild(i);
    var div2 = document.createElement('div');
    div2.className = "comment";
    var p = document.createElement('p');
    p.textContent= comment;
    var span = document.createElement('span');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    span.className="date";
    span1.className="time";
    span2.className="reply";
    span3.className="heart";
    var date = new Date();
    var fulldate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    var time = hour+':'+min;
    var i1 = document.createElement('i');
    var i2 = document.createElement('i');
    var i3 = document.createElement('i');
    var i4 = document.createElement('i');
    i1.className="far fa-calendar-alt";
    i2.className="far fa-clock";
    i3.className="fas fa-reply fa-md";
    i4.className="far fa-heart fa-md";
    span2.appendChild(i3);
    span3.appendChild(i4);
    span.textContent= ' '+fulldate;
    span1.textContent=' '+time;
    span.prepend(i1);
    span1.prepend(i2);
    div2.appendChild(p);
    div2.appendChild(span);
    div2.appendChild(span1);
    div2.appendChild(span2);
    div2.appendChild(span3);
    div.appendChild(div1);
    div.appendChild(div2);
    document.getElementById('comment_add').prepend(div);
    document.getElementById('textarea').value="";
    var no = document.querySelectorAll('.comment_sec');
    var no_arr = Array.from(no);
    var tot_no = no_arr.length;
    document.getElementById('no').innerHTML = tot_no;
}

var no = document.querySelectorAll('.comment_sec');
var no_arr = Array.from(no);
var tot_no = no_arr.length;
document.getElementById('no').innerHTML = tot_no;

var hearts = document.querySelectorAll('.heart');
var hearts_arr = Array.from(hearts);
hearts_arr.forEach(function(heart){
heart.onclick = function (e){
    console.log(e.target);
    if(e.target.className==="far fa-heart fa-md"){
    e.target.className="fas fa-heart fa-md text-danger";
    }else{
    e.target.className="far fa-heart fa-md";
    }
}
})