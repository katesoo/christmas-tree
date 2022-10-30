import { Classes } from './Interface';

const buts = document.querySelectorAll(Classes.sizeWithD);
const butsF = document.querySelectorAll(`.${Classes.form}`);

buts.forEach((but) => {
  but.addEventListener('click', () => {
    but.classList.toggle('activeBut');
  });
});

butsF.forEach((but) => {
  but.addEventListener('click', () => {
    but.classList.toggle('activeBut');
  });
});

const label = Array.from(document.getElementsByTagName('label'));
console.log(label);

label.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('activeLabel');
  });
});
