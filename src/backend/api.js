const API_KEY = "845cad9edf30d5ce741aff2cf0077e8f";
const BASE_URL = "https://api.themoviedb.org/3";

const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results;    
};  

const getSearchedMovie = async (title) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`);
    const data = await response.json();
    return data.results;
};

// const getSearchedMovie = () => {
//     console.log("Search");
// };

export { getPopularMovies, getSearchedMovie };