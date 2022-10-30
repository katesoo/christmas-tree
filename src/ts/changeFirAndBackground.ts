import { Classes } from './Interface';

const firs = Array.from(document.getElementsByClassName(Classes.tree));
export const firPlace = document.querySelector(Classes.firTree) as HTMLElement;
const backs = Array.from(document.getElementsByClassName(Classes.background));
const background = document.querySelector(Classes.firTreePage) as HTMLElement;

firs.forEach((fir: Element, i: number) => {
  fir.addEventListener('click', () => {
    firPlace.setAttribute('src', `./assets/tree/tree${i + 1}.png`);
  });
});

backs.forEach((back: Element) => {
  back.addEventListener('click', () => {
    background.style.backgroundImage = window.getComputedStyle(back).backgroundImage;
  });
});
