const data: Array<Card> = require('../assets/data.json');
import { Card, Classes, Color } from './Interface';
import { addCard } from './addCard';
import { Flags } from './filter';
import { resetFilter, resetOther } from './reset';

export const colorButs = Array.from(document.getElementsByClassName(Classes.butColor));

colorButs.forEach((color, i) => {
  color.addEventListener('click', () => {
    switch (i) {
      case 0:
        filterColor('white');
        break;
      case 1:
        filterColor('yellow');
        break;
      case 2:
        filterColor('red');
        break;
      case 3:
        filterColor('blue');
        break;
      case 4:
        filterColor('green');
    }
  });
});

export function filterColor(col: string): void {
  Flags.color[col] = Flags.color[col] === false ? true : false;
  resetFilter('color');
  colorArr();
}

export let arrColor: Array<Card>;

export function colorArr(): void {
  arrColor = [];
  data.forEach((el: Card) => {
    if (Flags.color.white && el.color === Color.white) arrColor.push(el);

    if (Flags.color.yellow && el.color === Color.yellow) arrColor.push(el);

    if (Flags.color.red && el.color === Color.red) arrColor.push(el);

    if (Flags.color.blue && el.color === Color.blue) arrColor.push(el);

    if (Flags.color.green && el.color === Color.green) arrColor.push(el);
    return arrColor;
  });
  arrColor = arrColor.length === 0 ? data : arrColor;
  resetOther('label');
  addCard(arrColor);
}
