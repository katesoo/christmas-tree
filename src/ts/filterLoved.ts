const data: Array<Card> = require('../assets/data.json');
import { Flags } from './filter';
import { Classes, Card } from './Interface';
import { addCard } from './addCard';

const loveBut = document.getElementById(Classes.butLove) as HTMLInputElement;

loveBut.addEventListener('click', () => {
  filterLove();
});

export let loveFiltered: Array<Card>;

function filterLove(): Array<Card> {
  loveFiltered = data.filter((el: Card) => {
    if (loveBut.checked) {
      Flags.loved = true;
      return el.favorite === true;
    }
    Flags.loved = false;
    return el.favorite == false || true;
  });

  addCard(loveFiltered);
  return loveFiltered;
}
