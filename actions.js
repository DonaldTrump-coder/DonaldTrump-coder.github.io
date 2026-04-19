const audio = document.getElementById('music');

audio.muted = true;
audio.play().catch(err => {
    console.log("autoplay blocked:", err);
});

let unlocked = false;

const unlockAudio = () => {
    if (unlocked) return;
    unlocked = true;

    audio.muted = false;
    audio.volume = 1;

    audio.play().catch(err => {
        console.log("unlock play failed:", err);
    });

    console.log("Music UNLOCKED!");
};
document.addEventListener('click', unlockAudio, { once: true });
document.addEventListener('keydown', unlockAudio, { once: true });