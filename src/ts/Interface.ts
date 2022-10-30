export type Card = {
  querySelector(arg0: string): Element | null;
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export interface IFilter {
  form: {
    [key: string]: boolean;
  };
  color: {
    [key: string]: boolean;
  };
  size: {
    [key: string]: boolean;
  };
  loved: boolean;
  special: boolean;
  count: { start: number; end: number };
  year: { start: number; end: number };
}

export enum Classes {
  card = 'card',
  special = 'special',
  cardTitle = '.card-title',
  count = '.count',
  year = '.year',
  shape = '.shape',
  color = '.color',
  sizeWithD = '.size',
  loved = '.loved',
  butSpecial = '.but-special',
  butLove = 'but-love',
  butColor = 'but-color',
  form = 'form',
  size = 'size',
  searchText = '.search-txt',
  listSort = '.list-sort',
  alfabetMax = 'alfab-max',
  alfabetMin = 'alfab-min',
  numMax = 'num-max',
  numMIn = 'num-min',
  balls = '.balls',
  ballCount = '.ball-count',
  tree = 'tree',
  firTree = '.fir-tree',
  background = 'background',
  firTreePage = '.fir-tree-page',
  soundIcon = '.sound-icon',
  active = 'active',
  snowFlake = 'snow-flake',
  cardsContainer = '.cards-container',
  specialContainer = '.special-container'
}

export enum Range {
  one = 'range-1',
  two = 'range-2'
}

export enum Years {
  start = 1940,
  end = 2021
}

export enum Count {
  start = 0,
  end = 12
}

export enum Color {
  white = 'белый',
  yellow = 'желтый',
  red = 'красный',
  blue = 'синий',
  green = 'зелёный'
}

export enum Shape {
  ball = 'шар',
  bell = 'колокольчик',
  cone = 'шишка',
  snowflake = 'снежинка',
  toy = 'фигурка'
}

export enum Size {
  big = 'большой',
  meduim = 'средний',
  small = 'малый'
}

export const specialMax = 19;

export const snowFallTime = 7000;

export const festoonShadow = '0px 4px 24px 3px';

export enum NoneFlex {
  'none',
  'flex'
}
