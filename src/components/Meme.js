import React, { useState } from "react";
import memesData from '../memesData';


export default function Meme() {

    const [memeImage, setMemeImage] = useState("");


    function handleClick() {
        const memes = memesData.data.memes;
        let item = memes[Math.floor(Math.random() * memes.length)];
        console.log(item.url);

        setMemeImage(item.url);
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text" />
                <input type="text" className="form--input" placeholder="Bottom Text" />
                <button onClick={handleClick} className="form--button" type="button">Get a new meme image</button>
            </div>

            <img src={memeImage} className="meme--img" />

        </main>
    )
}