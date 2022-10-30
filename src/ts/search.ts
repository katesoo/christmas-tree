import { addCard } from './addCard';
import { Classes, Card } from './Interface';

const search = document.querySelector(Classes.searchText) as HTMLInputElement;
const data: Array<Card> = require('../assets/data.json');

search?.addEventListener('input', searchName);

function searchName(): void | Card {
  const value = search.value.trim();
  if (value !== '') {
    const arr = data.filter((item: Card) => {
      const str = new RegExp(value, 'gi');
      if (item.name.search(str) == -1) {
        return;
      }
      return item;
    });
    addCard(arr);
  } else {
    addCard(data);
  }
}
