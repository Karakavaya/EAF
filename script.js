function updateContent(){

  const name = document.getElementById("nameInput").value;
  const photo = document.getElementById("photoInput");

  const displayName = document.getElementById("displayName");
  const preview = document.getElementById("preview");

  if(name.trim() !== ""){
    displayName.innerHTML = `Minta maaf ya sayang, ${name} 🤍`;
  }

  if(photo.files && photo.files[0]){

    const reader = new FileReader();

    reader.onload = function(e){
      preview.src = e.target.result;
    }

    reader.readAsDataURL(photo.files[0]);

  }

}

/* AUTOPLAY FIX MOBILE */

document.addEventListener("click", function () {
  const audio = document.getElementById("bgMusic");
  audio.play();
});