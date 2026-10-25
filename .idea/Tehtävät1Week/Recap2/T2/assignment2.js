'use strict';

const numbers = [];

for (let i = 1; i <= 5; i++) {
    const num = parseInt(prompt(`Enter Number ${i}:`), 10);
    numbers.push(num);
}

console.log('Numbers:', numbers);

const searchNumInput = prompt('Enter a Number to Search:');
const searchNum = parseInt(searchNumInput, 10);

let searchResultMsg = '';
if (numbers.includes(searchNum)) {
    searchResultMsg = `Number ${searchNum} is found in the array.`;
} else {
    searchResultMsg = `Number ${searchNum} is not found in the array.`;
}
console.log(searchResultMsg);

numbers.pop();

console.log('Updated Numbers:', numbers);

const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log('Sorted Numbers:', sortedNumbers);

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
  <p>Numbers: [${numbers.concat(numbers.length < 5 ? [] : []) /* näytölle */ }]</p>
  <p>${searchResultMsg}</p>
  <p>Sorted Numbers: [${sortedNumbers.join(', ')}]</p>
  <p><em>(Katso myös tarkat tulokset konsolista F12)</em></p>
`;