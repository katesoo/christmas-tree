import { ballImgs } from './addBalls';
import { Classes } from './Interface';
const area = document.getElementById('area');
const ballPlaces = document.querySelectorAll(Classes.balls) as NodeListOf<HTMLElement>;

export function logBalls(): void {
  ballImgs.forEach((ball) => {
    ball.addEventListener('dragstart', start);
  });
}

function start(e: DragEvent): void {
  e.dataTransfer?.setData('id', (<HTMLElement>e.target).id);
  e.dataTransfer?.setData('data', (<HTMLElement>e.target).dataset.ball as string);
  (e.dataTransfer as DataTransfer).dropEffect = 'copy';
}

area?.addEventListener('dragover', over);
area?.addEventListener('drop', drop);

function over(e: Event) {
  e.preventDefault();
}

function drop(e: DragEvent): void {
  const itemId = e.dataTransfer?.getData('id');
  const itemData = e.dataTransfer?.getData('data');
  const ball = document.getElementById(`${itemId}`) as HTMLElement;
  const ballCount = document.querySelector(`${Classes.count}-${itemData}`) as HTMLElement;
  if (+(ballCount.textContent as string) > 0) {
    ballCount.textContent = +(ballCount.textContent as string) - 1 + '';
  }
  area?.after(ball);
  ball.style.zIndex = 20 + '';
  ball.style.left = e.pageX - window.innerWidth * 0.2 - 20 + 'px';
  ball.style.top = e.pageY - 80 + 'px';
}

ballPlaces.forEach((pl: HTMLElement) => {
  pl.addEventListener('dragstart', start);
  pl.addEventListener('dragover', over);
  pl.addEventListener('drop', dropHome);
});

function dropHome(e: DragEvent): void {
  const itemId = e.dataTransfer?.getData('id');
  const itemData = e.dataTransfer?.getData('data') as string;
  const nums = itemData.match(/\d+/) as RegExpExecArray;
  const index = +nums[0];

  const ball = document.getElementById(`${itemId}`) as HTMLElement;
  ball.style.left = '';
  ball.style.top = '';
  ballPlaces[index - 1].append(ball);
  const ballCount = document.querySelector(`${Classes.count}-${itemData}`) as Element;
  ballCount.textContent = +(ballCount.textContent as string) + 1 + '';
}
