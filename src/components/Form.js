import React from 'react'
import memesData from '../memesData'

const Form = () => {
    function getMemeImage () {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <main>
            <div className='form'>
                <input type='text' placeholder='Top text' />
                <input type='text' placeholder='bottom text' />
                <input type='submit' value='Get a new meme image' onClick={getMemeImage}/>
            </div>
            
        </main>
    )
}

export default Form