'use strict';

const celsiusInput = prompt('Enter temperature in Celsius:');
const C = parseFloat(celsiusInput);

const F = (C * 9/5) + 32;
const K = C + 273.15;

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
  <p>Celsius: ${C.toFixed(2)} °C</p>
  <p>Fahrenheit: ${F.toFixed(2)} °F</p>
  <p>Kelvin: ${K.toFixed(2)} K</p>
`;
