import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const navigator = useNavigate();

    const makeFavorite = (e) => {
        e.preventDefault();
        if (!isFavorite(movie.id)) addToFavorites(movie);
        else removeFromFavorites(movie.id);
    };

    return (
        <div className="movie-card"
            onClick={() => {
                navigator(`/player/${movie.id}`);
                //window.location.href = `https://vidsrc.xyz/embed/movie/${movie.id}`;
                //navigator(`https://www.youtube.com/watch?v=WZj41aaI3X0`)
            }}>
            <div className="movie-poster">
                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
                    alt={movie.title} 
                />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${isFavorite(movie.id) ? "active" : ""}`}
                        onClick={makeFavorite}
                        >
                            ❤︎⁠
                        </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;