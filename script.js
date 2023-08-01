document.getElementById("continuebutton").addEventListener("click", function() {
    document.getElementById("continuebutton").style.display = "none";
    document.getElementById("restofsite").style.display = "block";
    const audioplayer = document.getElementById("musicplayer");
    audioplayer.play();
    audioplayer.loop = true;
});

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.innerHTML = "❄";
    document.body.appendChild(snowflake);

    snowflake.addEventListener("animationend", () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 500);
