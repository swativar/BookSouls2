window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
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

function addNewComment(){
    var newComment = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      comment: document.getElementById('comment').value
    }
    var div = document.createElement('div');
    div.className="mt-5";
    var p = document.createElement('p');
    p.className="user";
    p.textContent= ' '+ newComment.name;
    var span = document.createElement('span');
    span.className="bg-info";
    var i = document.createElement('i');
    i.className="fas fa-user fa-lg";
    span.appendChild(i);
    p.prepend(span);
    var span1 = document.createElement('span');
    span1.className="date";
    var date = new Date();
    var fulldate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    span1.textContent = fulldate;
    var div1 = document.createElement('div');
    div1.className = "comment";
    div1.textContent = newComment.comment;
    div.appendChild(p);
    div.appendChild(span1);
    div.appendChild(div1);
    document.getElementById('comment_sec').prepend(div);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comment').value = '';
}