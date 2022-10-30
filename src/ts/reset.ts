const reset = document.querySelector('.reset');
import { changeCountS, changeYearS } from '../slider/slider-init';
import { Flags } from './filter';
import { colorArr } from './filterColor';
import { changeCount } from './filterCount';
import { arrSize } from './filterSize';
import { changeYear } from './filterYear';
import { formArr } from './filterForm';
import { sort } from './sotrtName';
import { Classes } from './Interface';

const label = Array.from(document.getElementsByTagName('label'));
const buts = Array.from(document.getElementsByTagName('button'));
const search = document.querySelector(Classes.searchText) as HTMLInputElement;

reset?.addEventListener('click', () => change());

function change(): void {
  (Flags.color.white = false),
    (Flags.color.yellow = false),
    (Flags.color.red = false),
    (Flags.color.blue = false),
    (Flags.color.green = false),
    (Flags.count.start = 0),
    (Flags.count.end = 12),
    (Flags.form.ball = false),
    (Flags.form.bell = false),
    (Flags.form.snowflake = false),
    (Flags.form.cone = false),
    (Flags.form.toy = false),
    (Flags.size.large = false),
    (Flags.size.medium = false),
    (Flags.size.small = false),
    (Flags.year.start = 1940),
    (Flags.year.end = 2021);
  search.value = '';
  resetOther();
  colorArr();
  arrSize();
  formArr();
  sort();
  changeYear();
  changeYearS();
  changeCount();
  changeCountS();
}

export function resetFilter(str: string): void {
  const keys = Object.keys(Flags);
  keys.forEach((key) => {
    if (key !== str && key == 'form') {
      Flags.form.ball = false;
      Flags.form.bell = false;
      Flags.form.snowflake = false;
      Flags.form.cone = false;
      Flags.form.toy = false;
    }
    if (key !== str && key == 'color') {
      Flags.color.white = false;
      Flags.color.yellow = false;
      Flags.color.red = false;
      Flags.color.blue = false;
      Flags.color.green = false;
    }
    if (key !== str && key == 'size') {
      Flags.size.large = false;
      Flags.size.medium = false;
      Flags.size.small = false;
    }
  });
}

export function resetOther(str?: string): void {
  buts.forEach((but) => {
    if (str && !but.classList.contains(str)) {
      but.classList.remove('activeBut');
    }
  });
  label.forEach((lab) => {
    if (str !== 'label') {
      lab.classList.remove('activeLabel');
    }
  });
}
