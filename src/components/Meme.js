import React, { useState } from "react";
import memesData from '../memesData';


export default function Meme() {

    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/24y43o.jpg");

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);


    function handleClick() {
        const memes = allMemeImages;
        let item = memes[Math.floor(Math.random() * memes.length)];

        setMeme(prevValue => ({
            ...prevValue,
            randomImage: item.url
        }));
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text" />
                <input type="text" className="form--input" placeholder="Bottom Text" />
                <button onClick={handleClick} className="form--button" type="button">Get a new meme image</button>
            </div>

            <img src={meme.randomImage} className="meme--img" />

        </main>
    )
}