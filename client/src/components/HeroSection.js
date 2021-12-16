import React from "react"

export default function HeroSection() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h1>
                        The Books Lover<br />
                        Read all About it!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />
                        Incidunt voluptas, porro nisi beatae inventore consequuntur?
                    </p>
                    <a href="ebooks.html" className="btn">Explore Now &#x27F6;</a>
                </div>
                <div className="col-2">
                    <img src="images/header-pic.png" alt="Header Pic" />
                </div>
            </div>
        </>
    );
}