function PlaySound(soundobj, num) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
    var img=document.getElementById("gif");
    img.src = "clus_"+num+".gif";

    var text = document.getElementById("text_"+num);
    text.style.display="block";
}

function StopSound(soundobj, num) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
    var img=document.getElementById("gif");
    img.src = "main.gif";

    var text = document.getElementById("text_"+num);
    text.style.display="none";
}
