import React from "react"
import {Link} from "react-router-dom";

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
                    <Link to="/" className="btn">Explore Now &#x27F6;</Link>
                </div>
                <div className="col-2">
                    <img src="images/header-pic.png" alt="Header Pic" />
                </div>
            </div>
        </>
    );
}