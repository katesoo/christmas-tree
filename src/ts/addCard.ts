import { Classes, Card, specialMax } from './Interface';
import { arrSpecial, spContainer, addSpecial } from './addToSpecial';

const cardContainer = document.querySelector(Classes.cardsContainer) as HTMLElement;

const idArr: string[] = [];

export function addCard(array: Array<Card>): void {
  cardContainer.innerHTML = '';
  array.forEach((item: Card) => {
    const card = document.createElement('div');
    card.classList.add(Classes.card);
    if (idArr.includes(item.name)) {
      card.id = item.name;
      card.classList.add(Classes.special);
    }
    card.innerHTML = getCarHTML(item);
    cardContainer.append(card);
    const loved = card.querySelector(Classes.loved);
    const lovedSpan = document.createElement('span');
    if (item.favorite === true) {
      lovedSpan.innerHTML = 'да';
    } else {
      lovedSpan.innerHTML = 'нет';
    }
    loved?.append(lovedSpan);

    card.addEventListener('click', () => {
      checkForSpecial(card, item);
    });
  });
}

function getCarHTML(item: Card): string {
  return `<h3 class="card-title"><span>${item.name}</span></h3>
    <div class="card-content">
    <img src="./assets/toys/${item.num}.png" alt="ball" id="card-img">
    <div class="description">
        <p class="count card-p">Количество:
         <span>${item.count}</span>
        </p>
        <p class="year card-p">Год покупки:
        <span>${item.year}</span>
        </p>
        <p class="shape card-p">Форма:
        <span>${item.shape}</span>
        </p>
        <p class="color card-p">Цвет:
        <span>${item.color}</span>
        </p>
        <p class="size card-p">Размер:
        <span>${item.size}</span>
        </p>
        <p class="loved card-p">Любимая:
        </p>
      </div>`;
}

function checkForSpecial(card: HTMLDivElement, item: Card): void {
  if (arrSpecial.length > specialMax && !card.classList.contains(Classes.special)) {
    spContainer.innerHTML = '20';
    alert('Извините, все слоты заполнены');
  } else {
    card.classList.toggle(Classes.special);
    if (card.classList.contains(Classes.special)) {
      card.id = `${item.name}`;
      idArr.push(card.id);
    } else {
      const index = idArr.indexOf(item.name);
      idArr.splice(index, 1);
      card.removeAttribute('id');
    }
    addSpecial(item);
  }
}
