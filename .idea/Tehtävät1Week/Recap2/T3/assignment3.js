'use strict';

const numbers = [];

let input;
while (true) {
    input = prompt("Enter a number (or 'done' to finish):");

    if (input === null || input.toLowerCase() === 'done') {
        break;
    }

    const num = Number(input);
    if (!isNaN(num)) {
        numbers.push(num);
    }
}

const evenNumbers = [];
for (const currentNumber of numbers) {
    if (currentNumber % 2 === 0) {
        evenNumbers.push(currentNumber);
    }
}

const resultDiv = document.querySelector('#result');

let outputText = '';
if (evenNumbers.length > 0) {
    outputText = `Even Numbers: ${evenNumbers.join(', ')}`;
} else {
    outputText = `Even Numbers: None`;
}

resultDiv.innerHTML = `
  <p>${outputText}</p>
  <p><em>Program finished. All numbers entered: [${numbers.join(', ')}]</em></p>
`;