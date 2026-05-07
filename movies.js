let movies;

async function main(filter) {
  const moviesWrapper = document.querySelector(".movies");

  const searchInput = document.getElementById("search__input");
  const searchButton = document.getElementsByClassName("input__button");
  const listItems = document.querySelectorAll("#itemList li");
  const myInput = document.getElementById('myInput');





  moviesWrapper.classList += " movies__loading";
  if (!movies) {
    movies = await getMovies();
  }

  moviesWrapper.classList.remove("movies__loading");

  


  searchInput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
   

    const filteredMovies = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(value),
    );

    renderMovies(filteredMovies);
  });

  searchInput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
     const query = searchInput.value;
    console.log("Searching for:", query);
});
  

  if (filter === "LOW_TO_HIGH") {
    movies.sort((a, b) => a.Price - b.Price);
  } else if (filter === "HIGH_TO_LOW") {
    movies.sort((a, b) => b.Price - a.Price);
  } else if (filter === "YEAR") {
    movies.sort((a, b) => b.Year - a.Year);
  } else if (filter === "RATED") {
    const ratingOrder = {
      PG: 1,
      "PG-13": 2,
      R: 3,
    };

    movies.sort((a, b) => ratingOrder[a.Rated] - ratingOrder[b.Rated]);
  }

  const moviesHtml = movies
    .map((movie) => {
      return `<div class="container">

<div class="user-card__container">
<figure>
<img class="movie__img" src="${movie.Poster}">    
</figure>
<h3>"${movie.Title}"</h4>
<p><b>Rated:</b> ${movie.Rated}</p>
<p><b>Year:</b> ${movie.Year}</p>
<p><b>Price:</b> $${movie.Price.toFixed(2)}</p>
</div>
</div>`;
    })
    .join("");

  moviesWrapper.innerHTML = moviesHtml;
}

function inputValue(input) {}
myInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Get the value from the input field
    const inputValue = myInput.value;
    console.log("Input received:", inputValue);
    
    // Optional: Prevent default form submission behavior
    event.preventDefault();
  }
});

function renderMovies(movies) {
  return (document.querySelector(".movies").innerHTML = movies
    .map((movie) => {
      return `<div class="container">

<div class="user-card__container">
<figure>
<img class="movie__img" src="${movie.Poster}">    
</figure>
<h3>"${movie.Title}"</h4>
<p><b>Rated:</b> ${movie.Rated}</p>
<p><b>Year:</b> ${movie.Year}</p>
<p><b>Price:</b> $${movie.Price.toFixed(2)}</p>
</div>
</div>`;
    })
    .join(""));
}

function filterMovies(event) {
  main(event.target.value);
}

setTimeout(() => {
  main();
});

//
function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          Title: "The King of Comedy",
          url: "./assets/mov one.jpg",
          Year: "1982",
          imdbID: "tt0085794",
          Type: "movie",
          Price: 3.17,
          Rated: "PG",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYTQxNGUwNmUtMDJhYy00ZjM1LWFjZjQtYmI5ZGY4YTZmZWQyXkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "A Midsummer Night's Sex Comedy",
          Year: "1982",
          imdbID: "tt0084329",
          Type: "movie",
          Rated: "R",
          Price: 2.19,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTMxMTM0MTk3Nl5BMl5BanBnXkFtZTcwOTEyODI1NA@@._V1_SX300.jpg",
        },
        {
          Title: "The Bugs Bunny/Looney Tunes Comedy Hour",
          Year: "1985",
          imdbID: "tt0088491",
          Type: "series",
          Rated: "PG",

          Price: 3.21,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNWIxMGI0NjQtNjdjZi00ZDZlLWJhZmMtMTkwOTNmYmE0ZmI2XkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "My Teen Romantic Comedy SNAFU",
          Year: "2013",
          imdbID: "tt2703720",
          Type: "series",
          Rated: "PG-13",
          Price: 2.23,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDE5NmZhN2ItNzU4YS00YTRlLWJlODYtMGQ1ZTQ2NTMxOTg2XkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "Fear City: A Family-Style Comedy",
          Year: "1994",
          imdbID: "tt0109440",
          Type: "movie",
          Rated: "PG-13",
          Price: 1.5,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMGU1NDhjYzMtZDhhYS00YTJlLTllNDEtY2U2NmJhMTVlMzViXkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "King of Comedy",
          Year: "1999",
          imdbID: "tt0188766",
          Type: "movie",
          Rated: "PG-13",
          Price: 3.17,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZGQ4MmNlMzctNTBkYS00Nzg5LWIxZjMtZDRjZWIwYjI2MjczXkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "The Broken Hearts Club: A Romantic Comedy",
          Year: "2000",
          imdbID: "tt0222850",
          Type: "movie",
          Rated: "PG-13",
          Price: 1.29,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2UxYTIxYTMtZTc2Yi00NDljLWJhMTctZGRmZjgxOWM2YWI5XkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "The Comedy of Terrors",
          Year: "1963",
          imdbID: "tt0056943",
          Type: "movie",
          Rated: "R",
          Price: 1.01,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDlkNzNlYzUtZjU2Mi00MTkxLThlYzgtMzk0YWM5MWJiNjdkXkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "Louis C.K.: Live at the Comedy Store",
          Year: "2015",
          imdbID: "tt4368814",
          Type: "movie",
          Rated: "R",
          Price: 3.3,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYTZhYjRlMDktMGQ5OC00ZTAzLWI2YjUtMTU1NTFmNDRmOWRjXkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "The Original Kings of Comedy",
          Year: "2000",
          imdbID: "tt0236388",
          Type: "movie",
          Rated: "R",
          Price: 2.09,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOWQxY2Q5YzEtZDA5ZS00MWM1LThmYzEtYjQ0ZDhkOWUyZTVhXkEyXkFqcGc@._V1_SX300.jpg",
        },
      ]);
    }, 1000);
  });
}
