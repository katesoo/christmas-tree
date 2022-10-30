const buts = document.querySelectorAll('.size');
const butsF = document.querySelectorAll('.form');

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

label.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('activeLabel');
  });
});
