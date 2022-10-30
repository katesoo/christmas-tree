const data: Array<Card> = require('../assets/data.json');
import { Classes, Card, Size } from './Interface';
import { Flags } from './filter';
import { addCard } from './addCard';
import { resetFilter, resetOther } from './reset';

const sizeButs = Array.from(document.getElementsByClassName(Classes.size));

sizeButs.forEach((size, i) => {
  size.addEventListener('click', () => {
    switch (i) {
      case 0:
        filterSize('large');
        break;
      case 1:
        filterSize('medium');
        break;
      case 2:
        filterSize('small');
        break;
    }
  });
});

export function filterSize(size: string): void {
  Flags.size[size] = Flags.size[size] === false ? true : false;
  resetFilter('size');
  arrSize();
}

export function arrSize(): void {
  let arrSize: Array<Card> = [];
  data.forEach((el: Card) => {
    if (Flags.size.large && el.size === Size.big) arrSize.push(el);

    if (Flags.size.medium && el.size === Size.meduim) arrSize.push(el);

    if (Flags.size.small && el.size === Size.small) arrSize.push(el);
    return arrSize;
  });
  arrSize = arrSize.length === 0 ? data : arrSize;
  resetOther('size');
  addCard(arrSize);
}
