document.getElementById("continuebutton").addEventListener("click", function() {
    document.getElementById("continuebutton").style.display = "none";
    document.getElementById("restofsite").style.display = "block";
    const files = [
        "./songs/slut.mp3",
        "./songs/ho.mp3",
        "./songs/homie.mp3",
        "./songs/bmpu.mp3",
        "./songs/ddlg.mp3",
    ];
    const index = Math.floor(Math.random() * files.length);
    const audioplayer = document.getElementById("musicplayer");
    audioplayer.src = files[index];
    audioplayer.play();
    audioplayer.loop = true;
});

