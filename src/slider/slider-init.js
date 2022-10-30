import noUiSlider from './nouislider'

var slider = document.getElementById("range-1");
var slider2 = document.getElementById("range-2");

if(slider){
  noUiSlider.create(slider, {
    start: [1, 12],
    connect: true,
    step: 1,
    range: {
      min: [1],
      max: [12],
    },

  });
  const input0 = document.getElementById('input-number1');
  const input1 = document.getElementById('input-number2');
  const inputs = [input0, input1];

  slider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });
}

if(slider2){
  noUiSlider.create(slider2, {
    start: [1940, 2021],
    connect: true,
    step: 10,
    range: {
      min: [1940],
      max: [2021],
    },
  });
  const input2 = document.getElementById('input-year1');
  const input3 = document.getElementById('input-year2');
  const inputs = [input2, input3];

  slider2.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });
}

export function changeYearS(){
  slider2.noUiSlider.set([1940, 2021]);
}
export function changeCountS(){
  slider.noUiSlider.set([1, 12]);
}