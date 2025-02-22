document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("birthdaySong");
    audio.play().catch(error => {
        console.log("Autoplay failed: ", error);
    });
});

document.getElementById('surpriseBtn').addEventListener('click', function() {
    alert('🎉 Parat ekda... Happyy birthday Sayuuu🎂🎁 Enjoy your day! I hope next year ekdm best jaoo.. Tula je je pahije te te bheto..🎂❤️');
});
