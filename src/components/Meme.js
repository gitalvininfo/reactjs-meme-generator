import React, { useState } from "react";
import memesData from '../memesData';


export default function Meme() {

    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/24y43o.jpg");

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    console.log(meme)

    const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

    function handleClick() {
        const memes = allMemeImages;
        let item = memes[Math.floor(Math.random() * memes.length)];

        setMeme(prevValue => ({
            ...prevValue,
            randomImage: item.url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name, value)

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    type="text"
                    className="form--input"
                    placeholder="Top Text" />


                <input
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    type="text"
                    className="form--input"
                    placeholder="Bottom Text" />
                <button onClick={handleClick} className="form--button" type="button">Get a new meme image</button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}