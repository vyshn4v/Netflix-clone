import React, { useState, useEffect } from 'react';
import Axios from '../../requests/Axios'
import { smallImageUrl } from '../../requests/Request';
import './Row.scss'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Row({ title, url, largeRow }) {
    //get movie details from the movie db
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function getData() {
            const data = await Axios.get(url)
            setMovie(data.data.results);
            return data
        };
        getData();
    }, [url]);
    //Youtube video trailer showing on click
    const [trailerUrl, setTrailerUrl] = useState("")
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        // console.log(movie);
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch((error) => console.log(error))
        }
    }


    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='movies-row'>
                {movie.map((movie) =>
                    <div key={movie.id + 2} className='movie'>
                        <img onClick={() => handleClick(movie)} className={largeRow ? 'row-images' : 'small_row_images'} key={movie.id} src={`${smallImageUrl}${movie.poster_path}`} alt="" />
                        <h5 className={largeRow ? 'informations' : 'small_informations'} >{movie.title ? movie.title : movie.original_title}<br />{movie.release_date}</h5>
                    </div>
                )
                }
            </div>
            {
                trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />
            }
        </div >
    )
}

export default Row
