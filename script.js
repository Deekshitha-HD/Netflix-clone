document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("bg-video");
    let unmuteButton = document.getElementById("unmute-btn");

    function enableSound() {
        video.muted = false;
        video.volume = 1.0; // Set volume to full
        video.play().then(() => {
            console.log("Video is playing with sound!");
        }).catch(error => {
            console.log("Autoplay with sound blocked: ", error);
        });
    }

    // Play with sound when the user clicks anywhere
    document.body.addEventListener("click", enableSound, { once: true });

    // Play with sound when clicking the unmute button
    unmuteButton.addEventListener("click", enableSound);
});
