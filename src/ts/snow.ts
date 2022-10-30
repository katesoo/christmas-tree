import { Classes, snowFallTime } from './Interface';

const snowBut = document.querySelector('.snow-icon') as HTMLElement;
let start: NodeJS.Timer;

snowBut.addEventListener('click', () => {
  snowBut.classList.toggle(Classes.active);
  if (snowBut.classList.contains(Classes.active)) {
    start = setInterval(addSnow, 100);
    return;
  }
  clearInterval(start);
});

function addSnow(): void {
  const snowFlake = document.createElement('i');
  snowFlake.classList.add(Classes.snowFlake);
  snowFlake.style.left = Math.random() * (window.innerWidth - 6) + 'px';
  snowFlake.style.opacity = Math.random() + '';

  document.body.appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, snowFallTime);
}
