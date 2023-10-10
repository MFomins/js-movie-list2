const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById("movie-list");

    if (movies.length === 0) {
        movieList.classList.remove("visible");
        return;
    } else {
        movieList.classList.add("visible");
    }
    movieList.innerHTML = ""; // not best approach - performance

    movies.forEach((movie) => {
        const movieEl = document.createElement("li");
        // movieEl.textContent = movie.info.title + ' - ' + movie.info[extraName];
        let text = (movie.info.title = " - ");
        for (const key in movie.info) {
            // for-in
            if (key !== "title") {
                text = text + `${key}: ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};
const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (title.trim() === "" || extraName === "" || extraValue === "") {
        return;
    }

    const newMovie = {
        info: {
            title, // if name is equal title: title, you can shorten it to just title
            [extraName]: extraValue,
        },
        id: Math.random(),
    };

    movies.push(newMovie);
    renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);
