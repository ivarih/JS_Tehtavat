'use strict';

const input = prompt('Enter a positive integer:');
const n = parseInt(input, 10);

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
  <p>Entered number: ${n}</p>
  <p><strong>Sum of natural numbers:</strong> ${sum}</p>
`;
