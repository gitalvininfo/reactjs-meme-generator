import React from "react";
import memesData from '../memesData';


export default function Meme() {


    function handleClick() {
        const memes = memesData.data.memes;
        let item = memes[Math.floor(Math.random() * memes.length)];
        console.log(item.url);
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text" />
                <input type="text" className="form--input" placeholder="Bottom Text" />
                <button onClick={handleClick} className="form--button" type="button">Get a new meme image</button>
            </div>
        </main>
    )
}