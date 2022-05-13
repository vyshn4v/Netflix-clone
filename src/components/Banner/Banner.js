import React, { useEffect, useState } from 'react'
import Axios from '../../requests/Axios'
import { trending, imageUrl } from '../../requests/Request'
import './Banner.scss'
function Banner() {
    const [banner, setBanner] = useState('')
    async function getData() {
        const data = await Axios.get(trending)
        setBanner(data.data.results[Math.floor(Math.random() * data.data.results.length)]);
        // console.log(data.data.results[Math.floor(Math.random() * data.data.results.length)]);
    }
    useEffect(() => {
        getData()
    }, [])
    // console.log(backdrop_path);

    //to trim contents in paragraph
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        < div className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("${banner ? `${imageUrl}${banner.backdrop_path}` : `${imageUrl}/1uegR4uAxRxiMyX4nQnpzbXhrTw.jpg`}")`,
            backgroundPosition: "center center",
        }
        }>
            <div className="banner-contents">
                <h1>{banner.title ? banner.title : banner.name}</h1>
                <div className="buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{truncate(banner.overview, 200)}</p>
            </div>
            <div className="black-shade"></div>
        </div >
    )
}

export default Banner
