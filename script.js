document.getElementById("continuebutton").addEventListener("click", function() {
    document.getElementById("continuebutton").style.display = "none";
    document.getElementById("restofsite").style.display = "block";
    const audioplayer = document.getElementById("musicplayer");
    audioplayer.play();
    audioplayer.loop = true;
});

