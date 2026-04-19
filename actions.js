window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('music');

    if (!audio) return;

    audio.play().catch(() => {
        const startMusic = () => {
            audio.muted = false;
            audio.play().then(() => {
                console.log("Music started!");
            }).catch((err) => {
                console.log("Error playing music:", err);
            });

            document.removeEventListener('click', startMusic);
            document.removeEventListener('keydown', startMusic);
            document.removeEventListener('scroll', startMusic);
        };

        document.addEventListener('click', startMusic);
        document.addEventListener('keydown', startMusic);
        document.addEventListener('scroll', startMusic);
    });
});