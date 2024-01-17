let maxPage;
let page = 0;
let infiniteScroll;
let historyArr = [];

searchFormBtn.addEventListener("click", () => {
    location.hash = `#search=${searchFormInput.value}`;
});
trendingBtn.addEventListener("click", () => {
    location.hash = "#trends";
});
arrowBtn.addEventListener("click", () => {
    if (historyArr.length > 1) {
        location.hash = historyArr[historyArr.length - 2];
        historyArr.splice(-2,2);
      } else {
        historyArr.pop();
        location.hash = "#home";
      }
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);
window.addEventListener("scroll", infiniteScroll, {passive: false});

function navigator() {
    console.log({ location });

    if (infiniteScroll) {
        window.removeEventListener("scroll", infiniteScroll);
        infiniteScroll = undefined;
    }

    if (location.hash.startsWith("#trends")) {
        trendsPage();
    }
    else if (location.hash.startsWith("#search=")) {
        searchPage();
    }
    else if (location.hash.startsWith("#movie=")) {
        movieDetailPage();
    }
    else if (location.hash.startsWith("#category=")) {
        categoriesPage();
    }
    else {
        homePage();
    }
    historyArr.push(location.hash)

    if (infiniteScroll) {
        window.addEventListener("scroll", infiniteScroll);
    }
    window.scroll(0, 0);
}

function homePage() {
    console.log("HOME");

    headerSection.style.background = "";

    headerSection.classList.remove("header-container--long");
    arrowBtn.classList.remove("header-arrow--white");


    headerTitle.classList.remove("inactive");
    searchForm.classList.remove("inactive");
    trendingPreviewSection.classList.remove("inactive");
    categoriesPreviewSection.classList.remove("inactive");
    likedMoviesSection.classList.remove("inactive");
    
    arrowBtn.classList.add("inactive");
    headerCategoryTitle.classList.add("inactive");
    genericSection.classList.add("inactive");
    movieDetailSection.classList.add("inactive");

    getTrendingMoviesPreview();
    getCategoriesPreview();
    getLikedMovies();
}

function categoriesPage() {
    console.log("CATEGORIES");

    headerSection.style.background = "";

    headerSection.classList.remove("header-container--long");
    arrowBtn.classList.remove("header-arrow--white");

    arrowBtn.classList.remove("inactive");
    headerCategoryTitle.classList.remove("inactive");
    genericSection.classList.remove("inactive");
    
    categoriesPreviewSection.classList.add("inactive");
    trendingPreviewSection.classList.add("inactive");
    searchForm.classList.add("inactive");
    headerTitle.classList.add("inactive");
    movieDetailSection.classList.add("inactive");
    likedMoviesSection.classList.add("inactive");

    const [_, categoryData] = location.hash.split("=");
    const [categoryId, categoryName] = categoryData.split("-");

    headerCategoryTitle.innerHTML = categoryName.replace("%20", ' ');

    getMoviesByCategory(categoryId);

    infiniteScroll = getPaginatedMoviesByCategory(categoryId);
}

function movieDetailPage() {
    console.log("MOVIE");

    headerSection.style.background = "";

    movieDetailSection.classList.remove("inactive");
    arrowBtn.classList.remove("inactive");

    headerSection.classList.add("header-container--long");
    arrowBtn.classList.add("header-arrow--white");
    
    categoriesPreviewSection.classList.add("inactive");
    trendingPreviewSection.classList.add("inactive");
    searchForm.classList.add("inactive");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.add("inactive");
    genericSection.classList.add("inactive");
    likedMoviesSection.classList.add("inactive");

    const [_, movieId] = location.hash.split("=");
    getMovieById(movieId);
}

function searchPage() {
    console.log("SEARCH");

    headerSection.style.background = "";

    headerSection.classList.remove("header-container--long");
    arrowBtn.classList.remove("header-arrow--white");

    arrowBtn.classList.remove("inactive");
    genericSection.classList.remove("inactive");
    searchForm.classList.remove("inactive");
    
    headerCategoryTitle.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    trendingPreviewSection.classList.add("inactive");
    headerTitle.classList.add("inactive");
    movieDetailSection.classList.add("inactive");
    likedMoviesSection.classList.add("inactive");

    const [_, query] = location.hash.split("=");
    getMoviesBySearch(query);

    infiniteScroll = getPaginatedMoviesBySearch(query);

}

function trendsPage() {
    console.log("TRENDS");

    headerSection.style.background = "";

    headerSection.classList.remove("header-container--long");
    arrowBtn.classList.remove("header-arrow--white");

    arrowBtn.classList.remove("inactive");
    headerCategoryTitle.classList.remove("inactive");
    genericSection.classList.remove("inactive");
    
    searchForm.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    trendingPreviewSection.classList.add("inactive");
    headerTitle.classList.add("inactive");
    movieDetailSection.classList.add("inactive");
    likedMoviesSection.classList.add("inactive");

    headerCategoryTitle.innerHTML = "Tendencias";
    
    getTrendingMovies();

    infiniteScroll = getPaginatedTrendingMovies;
}