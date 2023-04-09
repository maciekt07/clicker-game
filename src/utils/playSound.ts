export const playSound = (sound: string, volume: number) => {
  if (volume !== 0) {
    const clickAudio = new Audio(sound);
    clickAudio.volume = volume;
    clickAudio.play();
  }
};
