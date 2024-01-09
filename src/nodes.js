const selectElement = (id) => document.querySelector(id);

// Sections
const headerSection = selectElement('#header');
const trendingPreviewSection = selectElement('#trendingPreview');
const categoriesPreviewSection = selectElement('#categoriesPreview');
const genericSection = selectElement('#genericList');
const movieDetailSection = selectElement('#movieDetail');

// Lists & Containers
const searchForm = selectElement('#searchForm');
const trendingMoviesPreviewList = selectElement('.trendingPreview-movieList');
const categoriesPreviewList = selectElement('.categoriesPreview-list');
const movieDetailCategoriesList = selectElement('#movieDetail .categories-list');
const relatedMoviesContainer = selectElement('.relatedMovies-scrollContainer');

// Elements
const headerTitle = selectElement('.header-title');
const arrowBtn = selectElement('.header-arrow');
const headerCategoryTitle = selectElement('.header-title--categoryView');

const searchFormInput = selectElement('#searchForm input');
const searchFormBtn = selectElement('#searchBtn');

const trendingBtn = selectElement('.trendingPreview-btn');

const movieDetailTitle = selectElement('.movieDetail-title');
const movieDetailDescription = selectElement('.movieDetail-description');
const movieDetailScore = selectElement('.movieDetail-score');