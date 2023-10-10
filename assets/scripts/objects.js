const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");

    if (movies.length === 0) {
        movieList.classList.remove("visible");
        return;
    } else {
        movieList.classList.add("visible");
    }
    movieList.innerHTML = ""; // not best approach - performance

    const filteredMovies = !filter
        ? movies
        : movies.filter((movie) => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement("li");
        const { info, ...otherProps } = movie; // object destruction
        console.log(otherProps);
        // const { title: movieTitle } = info; // for obj destruction training purposes
        // const { getFormatedTitle } = movie;
        let text = movie.getFormatedTitle() + " - ";
        for (const key in info /* movie.info before */) {
            if (key !== "title") {
                text = text + `${key}: ${info[key]}`;
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
        id: Math.random().toString(),
        getFormatedTitle() {
            return this.info.title.toUpperCase();
        }
    };

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
