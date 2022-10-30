import { addBalls } from './addBalls';
import { NoneFlex } from './Interface';

const start = document.querySelector('.but-start') as HTMLElement;
const mainBlock = document.querySelector('.main-page') as HTMLElement;
const startBlock = document.querySelector('.start-page') as HTMLElement;
const toToys = document.querySelector('.nav-item__toys') as HTMLElement;
const toFir = document.querySelector('.nav-item__fir') as HTMLElement;
const filterBlock = document.querySelector('.filter-page') as HTMLElement;

start.addEventListener('click', openMain);

function openMain(): void {
  filterBlock.style.display = NoneFlex[0];
  startBlock.style.display = NoneFlex[0];
  mainBlock.style.display = NoneFlex[1];
  addBalls();
}

toToys.addEventListener('click', openFilter);

function openFilter(): void {
  mainBlock.style.display = NoneFlex[0];
  startBlock.style.display = NoneFlex[0];
  filterBlock.style.display = NoneFlex[1];
}

toFir.addEventListener('click', openMain);
