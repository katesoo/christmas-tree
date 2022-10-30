const data: Array<Card> = require('../assets/data.json');
import { Card } from './Interface';
import { Flags } from './filter';
import { addCard } from './addCard';

const min = document.getElementById('input-number1') as HTMLInputElement;
const max = document.getElementById('input-number2') as HTMLInputElement;

max.addEventListener('change', filterCount);
export let countFiltered: Array<Card>;

export function changeCount(): void {
  min.value = Flags.count.start.toString();
  max.value = Flags.count.end.toString();
  filterCount();
}

export function filterCount(): void {
  countFiltered = [];
  countFiltered = data.filter((el: Card) => {
    Flags.count.start = +min.value;
    Flags.count.end = +max.value;
    return +el.count <= +max.value && +el.count >= +min.value;
  });
  countFiltered = countFiltered.length === 0 ? data : countFiltered;
  addCard(countFiltered);
}
