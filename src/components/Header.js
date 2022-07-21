import React from "react"

export default function Header(){
    return(
        <header className="flex-row">
            <img className="headerIcon" src="trollFace.png"></img>
            <h1 className="headerTitle">Meme Generator</h1>
            <h3 className="headerSubTitle">React Project</h3>
        </header>
    )
}