// const data: Array<ICard> = require('../assets/data.json');
// import { filter, ICard } from './Interface';
// import { addCard } from './addCard';
// import { Flags } from './filter';

// const colorButs = Array.from(document.getElementsByClassName('but-color'));

// colorButs.forEach((color, i) => {
//   color.addEventListener('click', () => {
//     filterColor(i);
//   });
// });

// export function filterColor(index: number): void {
//   if (index === 0) {
//     Flags.color.white === false ? (Flags.color.white = true) : (Flags.color.white = false);
//   }
//   if (index === 1) {
//     Flags.color.yellow === false ? (Flags.color.yellow = true) : (Flags.color.yellow = false);
//   }
//   if (index === 2) {
//     Flags.color.red === false ? (Flags.color.red = true) : (Flags.color.red = false);
//   }
//   if (index === 3) {
//     Flags.color.blue === false ? (Flags.color.blue = true) : (Flags.color.blue = false);
//   }
//   if (index === 4) {
//     Flags.color.green === false ? (Flags.color.green = true) : (Flags.color.green = false);
//   }
//   colorArr();
// }

// export let arrColor: Array<ICard>;

// export function colorArr(): void {
//   arrColor = [];
//   data.filter((el: ICard) => {
//     if (Flags.color.white === true) {
//       if (el.color === 'белый') {
//         arrColor.push(el);
//       }
//     }
//     if (Flags.color.yellow === true) {
//       if (el.color === 'желтый') {
//         arrColor.push(el);
//       }
//     }
//     if (Flags.color.red === true) {
//       if (el.color === 'красный') {
//         arrColor.push(el);
//       }
//     }
//     if (Flags.color.blue === true) {
//       if (el.color === 'синий') {
//         arrColor.push(el);
//       }
//     }
//     if (Flags.color.green === true) {
//       if (el.color === 'зелёный') {
//         arrColor.push(el);
//       }
//     }
//     return arrColor;
//   });

//   addCard(arrColor);
// }
