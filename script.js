function nextPage(page){

  document.querySelectorAll(".page").forEach(section=>{
    section.classList.add("hidden");
  });

  if(page === 1){
    document.getElementById("page2").classList.remove("hidden");
  }

  if(page === 2){
    document.getElementById("page3").classList.remove("hidden");
  }

  if(page === 3){
    document.getElementById("page4").classList.remove("hidden");
  }

}

/* AUTOPLAY FIX */

document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play();
});