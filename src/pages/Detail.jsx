import { useParams } from "react-router-dom";
import { getMovieById } from "../backend/api";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import calender from "../../public/calender.svg";
import clock from "../../public/clock.svg";
import "../css/Detail.css";

function Detail() {
    const { movieId } = useParams();
    // const [movie, setMovie] = useState("default");
    const [loading, setLoading] = useState(true);

    // I am using useRef to stop react from re-rendering the component
    const movie = useRef();

    const navigator = useNavigate();
    
    useEffect(() => {
        const loadMovieDetails = async () => {
            try {
                movie.current = await getMovieById(movieId);
                console.log(movie);
            } catch(err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadMovieDetails();
    }, []);

    const getHoursMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };

    return (
    <div>
        {loading ? <p>Loading...</p> : (
        <div className="layout">
            <img className="backdrop-img"
            src={`https://image.tmdb.org/t/p/w500/${movie.current.backdrop_path}`}></img>

            <div className="poster-div">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.current.poster_path}`}></img>
            </div>
            <div className="details-div">
            <h1>{movie.current.title}</h1>
            <p>{movie.current.tagline}</p>
            <div className="info-section">
                <div className="rating">
                    <p>★</p>
                    <p>{movie.current.vote_average.toFixed(1)}</p>
                </div>
                <div>
                    <img src={calender} width={20} height={20}></img>
                    <p>{new Date(movie.current.release_date).getFullYear()}</p>
                </div>
                <div>
                    <img src={clock} width={20} height={20}></img>
                    <p>{getHoursMinutes(movie.current.runtime)}</p>
                </div>
                <p>{movie.current.status}</p>
            </div>
            <button
            onClick={() => {
                navigator(`/Player/${movieId}`);
            }}
            >Watch Now</button>
            <div>
                <h2>Overview</h2>
                <p>{movie.current.overview}</p>
            </div>
        </div>
        </div>
        )
        }
    </div>);
}

export default Detail;