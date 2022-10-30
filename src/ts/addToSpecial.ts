import { addCard } from './addCard';
import { Classes, Card } from './Interface';
const data: Array<Card> = require('../assets/data.json');

export const spContainer = document.querySelector(Classes.specialContainer) as HTMLElement;

export const arrSpecial: Array<Card> = [];

export function addSpecial(card: Card): void {
  if (arrSpecial.includes(card)) {
    const index = arrSpecial.indexOf(card);
    arrSpecial.splice(index, 1);
  } else {
    arrSpecial.push(card);
  }
  spContainer.innerHTML = arrSpecial.length.toString();
}

const butSpecial = document.querySelector(Classes.butSpecial) as HTMLInputElement;

butSpecial.addEventListener('click', () => {
  addCard(butSpecial.checked ? arrSpecial : data);
});
