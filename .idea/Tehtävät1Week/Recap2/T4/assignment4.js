'use strict';

function sortArray(numbers) {
    return [...numbers].sort((a, b) => a - b);
}

const originalArray = [5, 2, 8, 1, 9];
const sortedArray = sortArray(originalArray);

console.log('Original array:', originalArray);
console.log('Sorted array:', sortedArray);

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
  <p>Original Array: [${originalArray.join(', ')}]</p>
  <p>Sorted Array: [${sortedArray.join(', ')}]</p>
  <p><em>(Katso tarkemmat tulokset myös konsolista F12)</em></p>
`;
