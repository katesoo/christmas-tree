import * as noUiSlider from 'nouislider';
import { filterCount } from '../ts/filterCount';
import { yearCount } from '../ts/filterYear';
import { Count, Range, Years } from '../ts/Interface';

const slider = document.getElementById(Range.one) as noUiSlider.target;
const slider2 = document.getElementById(Range.two) as noUiSlider.target;

export function changeYearS(): void {
  slider2.noUiSlider?.set([Years.start, Years.end]);
}
export function changeCountS(): void {
  slider.noUiSlider?.set([Count.start, Count.end]);
}

if (slider) {
  noUiSlider.create(slider, {
    start: [Count.start, Count.end],
    connect: true,
    step: 1,
    range: {
      min: [Count.start],
      max: [Count.end]
    }
  });
  const input0 = document.getElementById('input-number1') as HTMLInputElement;
  const input1 = document.getElementById('input-number2') as HTMLInputElement;
  const inputs = [input0, input1];

  slider.noUiSlider?.on('update', function (this: noUiSlider.API, values: number[], handle: number) {
    inputs[handle].value = `${Math.round(values[handle])}`;
    filterCount();
  });
}

if (slider2) {
  noUiSlider.create(slider2, {
    start: [Years.start, Years.end],
    connect: true,
    step: 10,
    range: {
      min: [Years.start],
      max: [Years.end]
    }
  });
  const input2 = document.getElementById('input-year1') as HTMLInputElement;
  const input3 = document.getElementById('input-year2') as HTMLInputElement;
  const inputs = [input2, input3];

  slider2.noUiSlider?.on('update', function (this: noUiSlider.API, values: number[], handle: number) {
    inputs[handle].value = `${Math.round(values[handle])}`;
    yearCount();
  });
}
