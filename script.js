document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("birthdaySong");
    const content = document.getElementById("content");
    const clickHereContainer = document.getElementById("clickHereContainer");

    function revealContent() {
        clickHereContainer.style.display = "none";
        content.style.display = "block";
        audio.play().catch(error => {
            console.log("Autoplay failed: ", error);
        });
    }
    
    clickHereContainer.addEventListener("click", revealContent);
    document.getElementById('surpriseBtn').addEventListener('click', function() {
        alert('🎉 Parat ekda... Happyy birthday Sayuuu🎂🎁 Enjoy your day! I hope next year ekdm best jaoo.. Tula je je pahije te te bheto..🎂❤️');
    });
    // Ensure the song plays only once
    audio.addEventListener("ended", function() {
        audio.pause();
    });
});
