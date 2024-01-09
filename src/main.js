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

async function getTrendingMoviesPreview() {
    /* const rest = await fetch(`${API}trending/movie/day?api_key=${API_KEY}`);
    const data = await rest.json(); */

    const { data } = await api("trending/movie/day");

    const movies = data.results;
    
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector("#trendingPreview .trendingPreview-movieList");

        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute("src", `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieContainer.appendChild(movieImg);

        trendingPreviewMoviesContainer.appendChild(movieContainer);

    });
}

async function getCategoriesPreview() {
    /* const rest = await fetch(`${API}genre/movie/list?api_key=${API_KEY}`);
    const data = await rest.json(); */

    const { data } = await api("genre/movie/list");

    const categories = data.genres;
    
    categories.forEach(category => {
        const previewCategoriesContainer = document.querySelector("#categoriesPreview .categoriesPreview-list");

        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryTitle = document.createElement("h3");
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.classList.add("category-title");
        categoryTitle.setAttribute("id", `id${category.id}`);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);
    });
}