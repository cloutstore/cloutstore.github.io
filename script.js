document.getElementById("continuebutton").addEventListener("click", function() {
    document.getElementById("continuebutton").style.display = "none";
    document.getElementById("restofsite").style.display = "block";
        const site = document.getElementById("site");
    site.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1133954199869194381/1136172140492771468/IMG_0426.jpg')";
    const files = [
        "./songs/music1.mp3",
        "./songs/music2.mp3",
    ];
    const index = Math.floor(Math.random() * files.length);
    const audioplayer = document.getElementById("musicplayer");
    audioplayer.src = files[index];
    audioplayer.play();
    audioplayer.loop = true;
});

