export const playSound = (sound) => {
    const audio = document.createElement('audio');
    audio.src = process.env.PUBLIC_URL + "/" + sound + '.mp3';
    audio.loop = loop;
    audio.play();
}