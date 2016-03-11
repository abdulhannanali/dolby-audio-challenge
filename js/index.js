var audio = document.getElementById("schubert-845");

if (Dolby.checkDDPlus() === true) {
  audio.src = 'Schubert-D845_Dolby.mp4';
}

audio.play();

var audio2 = document.getElementById("tchai-1812");

if (Dolby.checkDDPlus() === true ) {
  audio.src = 'tchai-1812_Dolby.mp4';
}

audio2.play();

var audio3 = document.getElementById("???");

if (Dolby.checkDDPlus() === true) {
  audio.src = '?????.mp4';
}

audio3.play();
