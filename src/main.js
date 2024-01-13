const API = "https://api.themoviedb.org/3/";
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    params: {
        "api_key": API_KEY
    }
})

const lazyLoader = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const url = entry.target.getAttribute("data-img");
            entry.target.setAttribute("src", url);
        }
    })
});

function createMovies(movies, container) {
    container.innerHTML = "";

    movies.forEach(movie => {

        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");
        movieContainer.addEventListener("click", () => {
            location.hash = `#movie=${movie.id}`;
        });
    
        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute("data-img", `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieImg.addEventListener("error", () => {
            movieImg.setAttribute("src", "data:image/jpeg;base64,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")
        });

        lazyLoader.observe(movieImg);
    
        movieContainer.appendChild(movieImg);
    
        container.appendChild(movieContainer);
    });
}

function createCategories(categories, container) {

    container.innerHTML = "";

    categories.forEach(category => {

        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryTitle = document.createElement("h3");
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.classList.add("category-title");
        categoryTitle.setAttribute("id", `id${category.id}`);

        categoryTitle.addEventListener("click", () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
}

async function getTrendingMoviesPreview() {
    /* const rest = await fetch(`${API}trending/movie/day?api_key=${API_KEY}`);
    const data = await rest.json(); */

    const { data } = await api("trending/movie/day");

    const movies = data.results;

    createMovies(movies, trendingMoviesPreviewList);
}

async function getTrendingMovies() {
    /* const rest = await fetch(`${API}trending/movie/day?api_key=${API_KEY}`);
    const data = await rest.json(); */

    const { data } = await api("trending/movie/day");

    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getCategoriesPreview() {
    /* const rest = await fetch(`${API}genre/movie/list?api_key=${API_KEY}`);
    const data = await rest.json(); */

    const { data } = await api("genre/movie/list");

    const categories = data.genres;

    createCategories(categories, categoriesPreviewList);
}

async function getMoviesByCategory(id) {
    /* const rest = await fetch(`${API}trending/movie/day?api_key=${API_KEY}`);
    const data = await rest.json(); */

    const { data } = await api("discover/movie", {
        params: {
            with_genres: id
        }
    });

    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getMoviesBySearch(query) {
    const { data } = await api("search/movie", {
        params: {
            query
        }
    });

    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getMovieById(id) {
    /* const rest = await fetch(`${API}trending/movie/day?api_key=${API_KEY}`);
    const data = await rest.json(); */

    const { data: movie } = await api(`/movie/${id}`);

    const movieImgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    headerSection.style.background = 
    `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.35) 19.27%,
        rgba(0, 0, 0, 0) 29.17%),
    url(${movieImgUrl})`;

    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;

    createCategories(movie.genres, movieDetailCategoriesList);
    getRelatedMoviesById(id);
}

async function getRelatedMoviesById(id) {
    const { data } = await api(`movie/${id}/similar`);

    const relatedMovies = data.results;

    createMovies(relatedMovies, relatedMoviesContainer);
}