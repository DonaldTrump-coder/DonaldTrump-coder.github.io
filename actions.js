window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('music');
    if (!audio) return;

    audio.play().catch(() => {
        console.log("Failed to auto-play");
    });

    const unlockAudio = () => {
        audio.muted = false;
        console.log("Music unmuted!");
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('keydown', unlockAudio);
        document.removeEventListener('scroll', unlockAudio);
    };

    document.addEventListener('click', unlockAudio);
    document.addEventListener('keydown', unlockAudio);
    document.addEventListener('scroll', unlockAudio);
});