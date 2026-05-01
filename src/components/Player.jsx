import { useParams } from "react-router-dom";
import { useState } from "react";

function Player() {
    const { movieId } = useParams();
    const servers = [
        `https://vidlink.pro/movie/${movieId}`,
        `https://embed.su/embed/movie/${movieId}`,
        `https://multiembed.mov/?video_id=${movieId}&tmdb=1`,
        `https://autoembed.co/movie/tmdb/${movieId}`
    ];

    const [movieServer, setMovieServer] = useState(servers[0]);


    return(
        <div>
            <iframe
                allow="autoplay; encrypted-media"
                allowFullScreen
                referrerPolicy="no-referrer"
                width="100%"
                height="500px"
                src={movieServer}
            >
            </iframe>
            
            {servers.map((server, i) => {
                return <button
                    onClick={() => {
                        console.log(server);
                        setMovieServer(server);
                    }}
                    key={i}
                >Sever {i + 1}</button>
            })}
        </div>
    );
}

export default Player;