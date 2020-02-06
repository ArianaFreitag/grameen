function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

function changeImg() {
  console.log("on")
    var img=document.getElementById("image");
    img.src = "beer-01.png";
}

function changeImgBack() {
  console.log("off")
    var img=document.getElementById("image");
    img.src = "boot-01.png";
}
