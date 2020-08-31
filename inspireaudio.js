function setTime() {
    var player = document.getElementById('player-js');
    var length = player.duration;
    console.log(length);
    var current_time = player.currentTime;
    // calculate total length of value
    var totalLength = calculateTotalValue(length);
  
    document.querySelector(".end-time span").innerHTML = totalLength;
  
    // calculate current value time
    var currentTime = calculateCurrentValue(current_time);
    document.querySelector(".start-time span").innerHTML = currentTime;
  }
  window.onload = function () {
    setTime();
  }
  
  var player = document.getElementById('player-js');
  player.ontimeupdate = function () {
    setTime();
    var ranger_path = document.querySelector('.ranger-path');
    var ranger_width = ranger_path.getBoundingClientRect().width;
    var progressbar = document.querySelector('.ranger-trail');
    var ranger_thumb = document.querySelector('.ranger-thumb'),
      ranger_thumb_width = ranger_thumb.getBoundingClientRect().width,
      totwidth = (player.currentTime / player.duration) * ranger_width - ranger_thumb_width / 2;
    progressbar.style.width = totwidth + 'px';
    ranger_thumb.style.left = totwidth + 'px';
  }
  var ranger_path = document.querySelector('.ranger-path');
  ranger_path.onclick =
    function (event) {
  
      var ranger_width = ranger_path.getBoundingClientRect().width;
      var progressbar = document.querySelector('.ranger-trail');
      var ranger_thumb = document.querySelector('.ranger-thumb'),
        ranger_thumb_width = ranger_thumb.getBoundingClientRect().width;
      var width = event.offsetX;
      var time = ((width + ranger_thumb_width / 2) / ranger_width) * player.duration;
      console.log(Math.floor(time));
      player.currentTime = Math.floor(time);
      progressbar.style.width = width + 'px';
      ranger_thumb.style.left = width + 'px';
      console.log(width);
    }
  
  function calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
      seconds_int = Math.floor(length - minutes * 60),
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2),
      //time = minutes + ':' + seconds
      time = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
      console.log(seconds_str,seconds,minutes);
    return time;
  }
  
  function calculateCurrentValue(currentTime) {
    var current_hour = parseInt(currentTime / 3600) % 24,
      current_minute = parseInt(currentTime / 60) % 60,
      current_seconds_long = currentTime % 60,
      current_seconds = current_seconds_long.toFixed(),
      current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
  
    return current_time;
  }
  
  var play_button = document.querySelector('.play-button');
  play_button.onclick = function () {
    var player = document.getElementById('player-js');
    if (player.paused) {
      player.play();
      play_button.src = "assets-InspireMe/Pause.svg";
    } else {
      player.pause();
      play_button.src = "assets-InspireMe/Play.svg";
    }
  }
  
  var vol_btns = document.querySelectorAll('.audio-vol-button');
  vol_btns.forEach(function (vol_btn) {
    vol_btn.onclick = function () {
    if (player.volume) {
      player.volume = false;
      vol_btn.src = "assets-InspireMe/Volume-OFF.svg";
    } else {
      player.volume = true;
      vol_btn.src = "assets-InspireMe/Volume-ON.svg";
    }
  }
  })
  
  player.onended = function () {
    play_button.src = "assets-InspireMe/Play.svg";
  }