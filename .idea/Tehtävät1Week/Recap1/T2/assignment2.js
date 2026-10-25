'use strict';

const x1 = parseFloat(prompt('Enter x-coordinate for point 1:'));
const y1 = parseFloat(prompt('Enter y-coordinate for point 1:'));
const x2 = parseFloat(prompt('Enter x-coordinate for point 2:'));
const y2 = parseFloat(prompt('Enter y-coordinate for point 2:'));

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
  <p>Point 1: (${x1}, ${y1})</p>
  <p>Point 2: (${x2}, ${y2})</p>
  <p><strong>Distance:</strong> ${distance.toFixed(2)}</p>
`;
