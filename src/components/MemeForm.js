import React from "react"

export default function Header(){
    return(
        <form className="memeForm flex-col" action="#" method="get">
            <section className="memeFormInputs flex-row">
                <input className="topText" type="text" placeholder="Top Text" name="topText"></input>
                <input className="botText" type="text" placeholder="Bottom Text" name="botText"></input>
            </section>
            <button className="submitForm" type="submit">
                <img src="getMeme.png"></img>
            </button>
        </form>
    )
}