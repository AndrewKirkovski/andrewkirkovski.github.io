let cur: HTMLAudioElement | undefined;
let oldAudio: string | undefined;

export const playSound = (sound: string, loop: boolean = false) => {
  if (loop) {
    if (sound !== oldAudio) {
      const audio = document.createElement('audio');
      audio.src = process.env.PUBLIC_URL + "/" + sound + '.mp3';
      audio.loop = loop;
      audio.play();
      if (cur) {
        cur.pause();
      }
      oldAudio = sound;
      cur = audio;
    }
  } else {
    const audio = document.createElement('audio');
    audio.src = process.env.PUBLIC_URL + "/" + sound + '.mp3';
    audio.loop = loop;
    audio.play();
  }
}