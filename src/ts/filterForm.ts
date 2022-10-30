const data: Array<Card> = require('../assets/data.json');
import { Flags } from './filter';
import { Classes, Card, Shape } from './Interface';
import { addCard } from './addCard';
import { resetFilter, resetOther } from './reset';

const formButs = Array.from(document.getElementsByClassName(Classes.form));
formButs.forEach((formBut, i: number) => {
  formBut.addEventListener('click', () => {
    switch (i) {
      case 0:
        filterForm('ball');
        break;
      case 1:
        filterForm('bell');
        break;
      case 2:
        filterForm('cone');
        break;
      case 3:
        filterForm('snowflake');
        break;
      case 4:
        filterForm('toy');
    }
  });
});

export function filterForm(form: string): void {
  Flags.form[form] = Flags.form[form] === false ? true : false;
  resetFilter('form');
  formArr();
}

export let arrForm: Array<Card>;

export function formArr(): void {
  arrForm = [];
  data.forEach((el: Card) => {
    if (Flags.form.ball && el.shape === Shape.ball) arrForm.push(el);

    if (Flags.form.bell && el.shape === Shape.bell) arrForm.push(el);

    if (Flags.form.cone && el.shape === Shape.cone) arrForm.push(el);

    if (Flags.form.snowflake && el.shape === Shape.snowflake) arrForm.push(el);

    if (Flags.form.toy && el.shape === Shape.toy) arrForm.push(el);
    return arrForm;
  });
  arrForm = arrForm.length === 0 ? data : arrForm;
  resetOther('form');
  addCard(arrForm);
}
