const text = "Hai Sayang 🤍";

let i = 0;

/* TYPING */

function typingEffect(){

  if(i < text.length){

    document.getElementById("typing")
    .innerHTML += text.charAt(i);

    i++;

    setTimeout(typingEffect,100);
  }

}

/* OPEN LETTER */

function openLetter(){

  document.getElementById("intro")
  .classList.add("hidden");

  document.getElementById("mainPage")
  .classList.remove("hidden");

  typingEffect();

}

/* OPEN GALLERY */

function showGallery(){

  document.getElementById("mainPage")
  .classList.add("hidden");

  document.getElementById("galleryPage")
  .classList.remove("hidden");

  startSlideshow();

}

/* ENDING */

function showEnding(){

  document.getElementById("galleryPage")
  .classList.add("hidden");

  document.getElementById("endingPage")
  .classList.remove("hidden");

}

/* IMAGES */

const images = [

  "Image1.jpg",
  "Image2.jpg",
  "Image3.jpg",
  "Image4.jpg",
  "Image5.jpg",
  "Image6.jpg"

];

let currentImage = 0;

const galleryImage =
document.getElementById("galleryImage");

const progressBar =
document.getElementById("progressBar");

/* NEXT IMAGE */

function nextImage(){

  currentImage++;

  if(currentImage >= images.length){

    showEnding();

    return;
  }

  galleryImage.style.opacity = 0;

  galleryImage.style.filter =
  "blur(10px)";

  galleryImage.style.transform =
  "scale(.92)";

  setTimeout(() => {

    galleryImage.src =
    images[currentImage];

    galleryImage.style.opacity = 1;

    galleryImage.style.filter =
    "blur(0px)";

    galleryImage.style.transform =
    "scale(1)";

    updateProgress();

  },700);

}

/* AUTO STORY */

function startSlideshow(){

  updateProgress();

  setInterval(() => {

    nextImage();

  },4000);

}

/* PROGRESS */

function updateProgress(){

  const percent =
  ((currentImage + 1)
  / images.length) * 100;

  progressBar.style.width =
  percent + "%";

}

/* PARALLAX */

document.addEventListener("mousemove",
(e)=>{

  const x =
  (window.innerWidth / 2 - e.pageX)
  / 40;

  const y =
  (window.innerHeight / 2 - e.pageY)
  / 40;

  galleryImage.style.transform =
  `translate(${x}px, ${y}px)`;

});

/* MUSIC FIX */

document.addEventListener("click",()=>{

  const music =
  document.getElementById("bgMusic");

  music.play();

});