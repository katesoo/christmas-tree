// import { festoonShadow } from './Interface';

// const festoonBut = Array.from(document.querySelectorAll('.festoon-but'));
// const ul = document.querySelectorAll('.fes-line');

// festoonBut.forEach((fes, index: number) => {
//   fes.addEventListener('click', () => {
//     deleteFes();
//     switch (index) {
//       case 0:
//         addFes('red');
//         break;
//       case 1:
//         addFes('yellow');
//         break;
//       case 2:
//         addFes('blue');
//         break;
//       case 3:
//         addFes('green');
//         break;
//       case 4:
//         addFes('multi');
//         break;
//     }
//   });
// });

// function deleteFes(): void {
//   ul.forEach((u) => {
//     while (u.firstChild) {
//       u.removeChild(u.firstChild);
//     }
//   });
// }

// function addFes(color: string): void {
//   for (let num = 0; num < 6; num++) {
//     for (let liCount = 0; liCount < num + 3; liCount++) {
//       const li = document.createElement('li');
//       li.classList.add('fes-fire');
//       li.style.background = `${color}`;
//       li.style.boxShadow = festoonShadow + color;
//       li.style.animationName = `${color}k`;
//       if (color === 'multi') {
//         const mulriArr = ['red', 'yellow', 'blue', 'green'];
//         li.style.background = `${mulriArr[Math.floor(Math.random() * 4)]}`;
//         li.style.boxShadow = festoonShadow + mulriArr[Math.floor(Math.random() * 4)];
//         li.style.animationName = `${mulriArr[Math.floor(Math.random() * 4)]}k`;
//       }
//       li.style.transform = `translate(0px, ${liCount % 2 === 0 ? 0 : 10}px)`;

//       ul[num].append(li);
//     }
//   }
// }
