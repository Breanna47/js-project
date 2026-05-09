let movies;
let searchValue = "";

const searchInput = document.getElementById("search__input");
const searchButton = document.getElementsByClassName("input__button");
const listItems = document.querySelectorAll("#itemList li");

function handleInputKeyDown(event) {
  if (event.key === "Enter") {
    getMovies();
    event.preventDefault();
  } else {
    searchValue = event.target.value;
  }
}

function renderMovies(filter) {
  const filteredMovies = document.querySelector(".movies");

  const movies = getMovies();

  console.log(filter)
  if (event.target.value === "YEAR") {
    console.log(filter)
  const filteredMovies = movies.sort((a, b) => b.Year - a.Year);
console.log(filteredMovies)
}
else if (filter === "OLDYEAR") {
    movies.sort((a, b) => a.Year - b.Year);
}
}

function renderMovies(movies) {
  document.querySelector(".movies").innerHTML = movies
    .map((movie) => {
      return `<div class="container">

<div class="user-card__container">
<figure>
<img class="movie__img" src="${movie.Poster}">    
</figure>
<h3>"${movie.Title}"</h4>
<p><b>Year:</b> ${movie.Year}</p>
<p><b>imdbID:</b> $${movie.imdbID}</p>
</div>
</div>`;
    })
    .join("");
}


function filterMovies(event) {
    renderMovies(event.target.value)
  } 

  

  renderMovies(filteredMovies);


async function getMovies() {
  if(searchValue.length < 3) {
    alert("Please enter at least 3 characters to search for movies.");
    return;
  }
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=774d6e3b&s=${searchValue}`
  );
  const data = await res.json();
  const movies = data.Search;
  renderMovies(movies);
}