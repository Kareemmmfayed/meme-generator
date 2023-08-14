import React from 'react'
import troll from '../assets/troll-face.png'

const Header = () => {
    return (
        <header className='header'>
            <img src={troll} alt='troll'/>
            <h2>Meme Generator</h2>
            <p> React-Course Project</p>
        </header>
    )
}

export default Header