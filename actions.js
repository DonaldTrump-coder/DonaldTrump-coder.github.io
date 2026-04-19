window.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('music');

    if (!audio) return;

    audio.play().catch(() => {
        const startMusic = () => {
            audio.muted = false;
            audio.play();

            document.removeEventListener('click', startMusic);
            document.removeEventListener('keydown', startMusic);
        };

        document.addEventListener('click', startMusic);
        document.addEventListener('keydown', startMusic);
    });
});