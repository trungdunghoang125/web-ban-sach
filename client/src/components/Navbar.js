import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/EbookStore-Logo.png" alt="EbookStore-Logo" />
                    </Link>
                </div>

                <nav>
                    <ul id="MenuItems">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Ebooks</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Account</Link></li>
                    </ul>
                </nav>
                <Link to="/cart">
                    <img
                        src="/images/cart.png"
                        alt="Shoping Cart"
                        className="shopping-cart"
                    />
                    {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )}
                </Link>
                <img src="images/menu.png" className="menu-icon" />
            </div>
        </>
    );
}