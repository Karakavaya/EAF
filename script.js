const text = "Hai Sayang 🤍";
let i = 0;

function typingEffect(){

  if(i < text.length){

    document.getElementById("typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(typingEffect,100);
  }

}

function openLetter(){

  document.getElementById("intro").classList.add("hidden");

  document.getElementById("mainPage").classList.remove("hidden");

  typingEffect();

}

function showGallery(){

  document.getElementById("mainPage").classList.add("hidden");

  document.getElementById("galleryPage").classList.remove("hidden");

}

function showEnding(){

  document.getElementById("galleryPage").classList.add("hidden");

  document.getElementById("endingPage").classList.remove("hidden");

}

/* MUSIC FIX */

document.addEventListener("click", () => {

  const music = document.getElementById("bgMusic");

  music.play();

});