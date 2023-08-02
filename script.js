document.getElementById("continuebutton").addEventListener("click", function() {
    document.getElementById("continuebutton").style.display = "none";
    document.getElementById("restofsite").style.display = "block";
    const site = document.getElementById("site");
    site.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1135592344847142952/1136148623374163968/IMG_0416.jpg')";
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

