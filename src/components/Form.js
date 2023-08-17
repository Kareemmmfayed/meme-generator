import React, { useState, useEffect } from 'react'

const Form = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState()

    function getMemeImage () {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prev => ({
            ...prev,
            randomImg: url
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function handleChangeT(event) {
        const {value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: value
        }))
    }

    function handleChangeB(event) {
        const {value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            bottomText: value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input type='text' placeholder='Top text' value={meme.topText} onChange={handleChangeT} />
                <input type='text' placeholder='bottom text' value={meme.bottomText} onChange={handleChangeB}/>
                <input type='submit' value='Get a new meme image' onClick={getMemeImage}/>
                <img src={meme.randomImg} alt='IMG' className='meme-img' />
                <h2 className="meme-text top"> {meme.topText} </h2>
                <h2 className="meme-text bottom"> {meme.bottomText} </h2>
            </div>
        </main>
    )
}

export default Form