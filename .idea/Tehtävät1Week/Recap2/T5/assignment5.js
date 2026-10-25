'use strict';

function sortArray(numbers, order) {
    const sorted = [...numbers];

    if (order === 'asc') {
        return sorted.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return sorted.sort((a, b) => b - a);
    }

    return sorted;
}

const numbers = [5, 2, 8, 1, 9];
const ascendingResult = sortArray(numbers, "asc");
const descendingResult = sortArray(numbers, "desc");

console.log('Original numbers:', numbers);
console.log('Ascending:', ascendingResult);   // Output: [1, 2, 5, 8, 9]
console.log('Descending:', descendingResult); // Output: [9, 8, 5, 2, 1]

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
  <p>Original: [${numbers.join(', ')}]</p>
  <p>Sorted (asc): [${ascendingResult.join(', ')}]</p>
  <p>Sorted (desc): [${descendingResult.join(', ')}]</p>
  <p><em>(Katso tarkemmat tulokset myös konsolista F12)</em></p>
`;