'use strict';

const side1 = parseFloat(prompt('Enter the length of the first side:'));
const side2 = parseFloat(prompt('Enter the length of the second side:'));
const side3 = parseFloat(prompt('Enter the length of the third side:'));

let triangleType = '';

if (side1 === side2 && side2 === side3) {
  triangleType = 'Equilateral triangle (Tasasivuinen kolmio)';
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  triangleType = 'Isosceles triangle (Tasakylkinen kolmio)';
} else {
  triangleType = 'Scalene triangle (Epäsäännöllinen kolmio)';
}

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
  <p>Sides given: ${side1}, ${side2}, ${side3}</p>
  <p><strong>Result:</strong> ${triangleType}</p>
`;
