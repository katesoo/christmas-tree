import { arrSpecial } from './addToSpecial';
import { logBalls } from './ballToTree';
import { Card, Classes, specialMax } from './Interface';
const data: Array<Card> = require('../assets/data.json');
const ballPlaces = Array.from(document.querySelectorAll(Classes.balls));
const ballCountPlace = document.querySelectorAll(Classes.ballCount);

export const ballImgs: HTMLImageElement[] = [];

export function addBalls(): void {
  for (let i = 0; i <= specialMax; i++) {
    getSpecialBalls(i);
    if (i >= arrSpecial.length && arrSpecial.length > 0) {
      ballCountPlace[i].innerHTML = '';
    }
    logBalls();
  }
  if (arrSpecial.length === 0) {
    ballPlaces.forEach((ballPlace: Element, index: number) => {
      getUnSpecialBalls(ballPlace, index);
    });
    logBalls();
  }
}

function getSpecialBalls(i: number): void {
  while (ballPlaces[i].lastChild !== ballPlaces[i].firstChild) {
    (ballPlaces[i].lastChild as ChildNode).remove();
  }
  arrSpecial.forEach((ball, index: number) => {
    if (index === i) {
      const src = `./assets/toys/${ball.num}.png`;
      const count = ball.count;
      ballCountPlace[i].innerHTML = count;
      for (let num = 0; num < +count; num++) {
        const ballImg = createBallPlace(src, index, num);
        ballPlaces[index].append(ballImg);
      }
    }
  });
}

function getUnSpecialBalls(ballPlace: Element, index: number): void {
  const src = `./assets/toys/${index + 1}.png`;
  for (let num = 0; num < +data[index].count; num++) {
    const ballImg = createBallPlace(src, index, num);
    ballPlace.append(ballImg);
    ballCountPlace[index].innerHTML = data[index].count;
  }
}

function createBallPlace(src: string, index: number, num: number): HTMLImageElement {
  const ballImg = document.createElement('img');
  ballImg.setAttribute('src', src);
  ballImg.setAttribute('id', `${index}-${num}`);
  ballImg.classList.add('ball');
  ballImg.dataset.ball = `ball${index + 1}`;
  ballImg.setAttribute('draggable', 'true');
  ballImgs.push(ballImg);
  return ballImg;
}
