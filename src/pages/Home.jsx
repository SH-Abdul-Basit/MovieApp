import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
    const movies = [
        { id: 1, title: "John Wick", releaseDate: "1999" },
        { id: 2, title: "Pokemon Advantures", releaseDate: "2005" },
        { id: 3, title: "The Glass Worker", releaseDate: "2021" },
        { id: 4, title: "Terminator", releaseDate: "2000" }
    ]

    const [searchMovie, setSearchMovie] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Search Movie");
    };

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

        <div className="movies-grid">
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchMovie) && 
            <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
    );
}

export default Home;