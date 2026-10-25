'use strict';

const scoreInput = prompt('Enter your score for the course assessment (0-100):');
const score = parseInt(scoreInput, 10);

let grade = 0;

if (score >= 88 && score <= 100) {
  grade = 5;
} else if (score >= 76 && score <= 87) {
  grade = 4;
} else if (score >= 64 && score <= 75) {
  grade = 3;
} else if (score >= 52 && score <= 63) {
  grade = 2;
} else if (score >= 40 && score <= 51) {
  grade = 1;
} else if (score >= 0 && score <= 39) {
  grade = 0;
} else {
  grade = 'Invalid score / Virheellinen pistemäärä';
}

const resultDiv = document.querySelector('#result');
resultDiv.innerHTML = `
  <p>Score: ${score}</p>
  <p><strong>Grade:</strong> ${grade}</p>
`;
