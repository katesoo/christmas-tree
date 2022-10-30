import { Classes } from './Interface';

const soundBut = document.querySelector(Classes.soundIcon) as HTMLElement;
const audio = new Audio('./assets/audio/audio.mp3');

soundBut.addEventListener('click', startSound);

function startSound(): void | Promise<void> {
  soundBut.classList.toggle('mute');
  if (!soundBut.classList.contains('mute')) {
    return audio.play();
  }
  return audio.pause();
}
