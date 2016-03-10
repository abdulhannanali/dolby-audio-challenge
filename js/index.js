var audio = document.getElementById("background-music");

if (Dolby.checkDDPlus() === true) {
  audio.src = 'nameshitidk.mp4';
}

audio.play();
