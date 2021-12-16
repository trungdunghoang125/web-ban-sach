import React from "react"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <a href="index.html">
                        <img src="/images/EbookStore-Logo.png" alt="EbookStore-Logo" />
                    </a>
                </div>


                <nav>
                    <ul id="MenuItems">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Ebooks</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Account</a></li>
                    </ul>
                </nav>
                <a href="/">
                    <img
                        src="/images/cart.png"
                        alt="Shoping Cart"
                        className="shopping-cart"
                    />
                </a>
                <img src="images/menu.png" className="menu-icon" onclick="menutoggle()" />
            </div>
        </>
    );
}