function PlaySound(soundobj, num) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
    var img=document.getElementById("gif");
    img.src = "beer-01.png";

    var text = document.getElementById("text_"+num);
    text.style.display="block";
}

function StopSound(soundobj, num) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
    var img=document.getElementById("gif");
    img.src = "test.gif";

    var text = document.getElementById("text_"+num);
    text.style.display="none";
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
