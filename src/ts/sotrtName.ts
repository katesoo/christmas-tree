const data: Array<Card> = require('../assets/data.json');
import { Classes, Card } from './Interface';
import { addCard } from './addCard';

const list = document.querySelector(Classes.listSort) as HTMLSelectElement;

list.addEventListener('click', sort);

export function sort(): Card[] {
  let nameFiltered: Card[] = [];
  if (list.value === Classes.alfabetMax) {
    nameFiltered = data.sort(function (a: Card, b: Card): number {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      else return 0;
    });
    addCard(nameFiltered);
  }
  if (list.value === Classes.alfabetMin) {
    nameFiltered = data.sort(function (a: Card, b: Card): number {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      else return 0;
    });
    addCard(nameFiltered);
  }
  if (list.value === Classes.numMax) {
    nameFiltered = data.sort(function (a: Card, b: Card): number {
      if (a.year > b.year) return 1;
      if (a.year < b.year) return -1;
      else return 0;
    });
    addCard(nameFiltered);
  }
  if (list.value === Classes.numMIn) {
    nameFiltered = data.sort(function (a: Card, b: Card): number {
      if (a.year < b.year) return 1;
      if (a.year > b.year) return -1;
      else return 0;
    });
    addCard(nameFiltered);
  }
  return nameFiltered;
}
