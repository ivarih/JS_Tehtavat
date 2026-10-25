'use strict';

const input = prompt('Enter a positive integer:');
const n = parseInt(input, 10);

const resultDiv = document.querySelector('#result');

if (isNaN(n) || n <= 0) {
  resultDiv.innerHTML = '<p>Please enter a valid positive integer.</p>';
} else {
  let tableHTML = '<table>';

  for (let i = 1; i <= n; i++) {
    tableHTML += '<tr>';

    for (let j = 1; j <= n; j++) {
      const product = i * j;
      tableHTML += `<td>${product}</td>`;
    }

    tableHTML += '</tr>';
  }

  tableHTML += '</table>';

  resultDiv.innerHTML = `
    <p>Multiplication Table up to ${n}:</p>
    ${tableHTML}
  `;
}
