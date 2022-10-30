const data: Array<Card> = require('../assets/data.json');
import { Card } from './Interface';
import { Flags } from './filter';
import { addCard } from './addCard';
import { target } from 'nouislider';

const min = document.getElementById('input-year1') as HTMLInputElement;
const max = document.getElementById('input-year2') as HTMLInputElement;
const range = document.getElementById('range-2') as target;

range.noUiSlider?.on('update', yearCount);
export let yearFiltered: Array<Card>;

export function changeYear(): void {
  min.value = Flags.year.start.toString();
  max.value = Flags.year.end.toString();
  yearCount();
}

export function yearCount(): void {
  yearFiltered = [];
  Flags.year.start = +min.value;
  Flags.year.end = +max.value;
  yearFiltered = data.filter((el: Card) => {
    return +el.year <= +max.value && +el.year >= +min.value;
  });

  addCard(yearFiltered);
}
