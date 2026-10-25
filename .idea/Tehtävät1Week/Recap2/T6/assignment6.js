'use strict';

const countInput = prompt('How many movies do you want to rate?');
const movieCount = parseInt(countInput, 10);

const movies = [];

if (!isNaN(movieCount) && movieCount > 0) {
    for (let i = 1; i <= movieCount; i++) {
        const title = prompt(`Enter title for movie ${i}:`);
        const ratingInput = prompt(`Enter rating for "${title}" (1-5):`);
        const rating = parseInt(ratingInput, 10);

        movies.push({
            title: title,
            rating: isNaN(rating) ? 1 : rating
        });
    }

    movies.sort((a, b) => b.rating - a.rating);

    const highestRated = movies[0];

    const resultDiv = document.querySelector('#result');

    let movieListHTML = '<ul>';
    for (const movie of movies) {
        movieListHTML += `<li><strong>${movie.title}</strong> – Rating: ${movie.rating}/5</li>`;
    }
    movieListHTML += '</ul>';

    resultDiv.innerHTML = `
    <div class="highest">
      <h3>Highest-Rated Movie:</h3>
      <p>🎬 <strong>${highestRated.title}</strong> (${highestRated.rating}/5)</p>
    </div>
    <h3>All Movies (Sorted):</h3>
    ${movieListHTML}
  `;
} else {
    document.querySelector('#result').innerHTML = '<p>Invalid number of movies entered.</p>';
}