window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('music');
    if (!audio) return;

    audio.muted = true;
    audio.play().catch(() => {
        console.log("Failed to auto-play");
    });
    let unlocked = false;
    const unlockAudio = () => {
        if (unlocked) return;
        unlocked = true;
        audio.muted = false;
        audio.play().catch(() => {});
        console.log("Music unmuted!");
    };

    document.addEventListener('click', unlockAudio);
    document.addEventListener('keydown', unlockAudio);
    document.addEventListener('scroll', unlockAudio);
});