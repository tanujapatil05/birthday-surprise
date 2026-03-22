function startSurprise() {
  document.getElementById("content").style.display = "block";

  // Play music (optional)
  var music = document.getElementById("music");
  if (music) {
    music.play();
  }
}