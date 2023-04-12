/**
 * Plays a sound with the given sound file and volume.

 * @param {string} sound - The file path or URL of the sound to play.
 * @param {number} volume - The volume at which to play the sound, from 0 to 1.
 */
export const playSound = (sound: string, volume: number) => {
  if (volume !== 0) {
    const clickAudio = new Audio(sound);
    clickAudio.volume = volume;
    clickAudio.play();
  }
};
