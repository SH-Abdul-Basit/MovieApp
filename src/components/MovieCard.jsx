import "../css/MovieCard.css";

function MovieCard({ movie }) {
    const makeFavorite = () => {
        console.log(movie.title + " favorite");
    };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn"
                        onClick={makeFavorite}
                        >
                            ❤︎⁠
                        </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    );
}

export default MovieCard;