const text = "Hai Sayang 🤍";
let i = 0;

function typingEffect(){

  if(i < text.length){

    document.getElementById("typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(typingEffect,100);
  }

}

/* OPEN LETTER */

function openLetter(){

  document.getElementById("intro").classList.add("hidden");

  document.getElementById("mainPage").classList.remove("hidden");

  typingEffect();

}

/* SHOW GALLERY */

function showGallery(){

  document.getElementById("mainPage").classList.add("hidden");

  document.getElementById("galleryPage").classList.remove("hidden");

}

/* ENDING */

function showEnding(){

  document.getElementById("galleryPage").classList.add("hidden");

  document.getElementById("endingPage").classList.remove("hidden");

}

/* GALLERY IMAGE SLIDER */

const images = [

  "Image1.jpg",
  "Image2.jpg",
  "Image3.jpg",
  "Image4.jpg",
  "Image5.jpg",
  "Image6.jpg"

];

let currentImage = 0;

const galleryImage = document.getElementById("galleryImage");

document.getElementById("galleryPage")
.addEventListener("click", () => {

  currentImage++;

  if(currentImage >= images.length){

    showEnding();

    return;
  }

  galleryImage.style.opacity = 0;

  setTimeout(() => {

    galleryImage.src = images[currentImage];

    galleryImage.style.opacity = 1;

  },400);

});

/* MUSIC FIX */

document.addEventListener("click", () => {

  const music = document.getElementById("bgMusic");

  music.play();

});