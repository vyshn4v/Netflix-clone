import React, { useEffect, useState } from 'react'
import './Nav.scss'
function Header() {
    const [scrollState, setScrollState] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY >= 120) {
                setScrollState(true)
            } else {
                setScrollState(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={ `header ${scrollState && "header-black"}`}>
            <div className="logo">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo" />
            </div>
            <div className="avathar">
                <img src="https://archive.org/download/profiles_202104/chicken.png" alt="" />
            </div>
        </div>
    )
}

export default Header
