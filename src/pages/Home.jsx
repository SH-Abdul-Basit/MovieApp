import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularMovies, getSearchedMovie } from "../backend/api.js";

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchMovie, setSearchMovie] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!searchMovie.trim()) return;
        if (loading) return;
        
        setLoading(true);
        try {
            const movies = await getSearchedMovie(searchMovie);
            setMovies(movies);
        } catch(err) {
            console.log(err);
            setError("Error searching movies...");
        } finally {
            setLoading(false);
        }
    };

    // Use effect runs every teh the [] changes 
    // but with empty it means to run only once when the 
    // component is created
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err) {
                console.log(err);
                setError("Error Happended...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    return (
    <div className="home">
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search for a movie..."
                className="search-input"
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)}
        />
        
        <button type="submit" className="search-button">
            Search
        </button>
        </form>

        {loading ? (<div className="loading">loading...</div>) : (
            <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
        )}

        {/* <iframe
        src="https://vidsrc.pm/embed/movie?imdb=tt0468569">
        </iframe> */}
    </div>
    );
}

export default Home;