import React from "react"
import { Helmet } from "react-helmet"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import data from "./data.js"
import Product from "./components/Product.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="index.html">
                <img src="images/EbookStore-Logo.png" alt="EbookStore-Logo" />
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
                src="images/cart.png"
                alt="Shoping Cart"
                className="shopping-cart"
              />
            </a>
            <img src="images/menu.png" className="menu-icon" onclick="menutoggle()" />
          </div>
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
        </div>
      </div>

      <Routes>


        <Route path="/product/:id" element={<ProductScreen />} exact />
        <Route path="/" element={<HomeScreen />} />
      </Routes>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phone.</p>
              <div className="app-logo">
                <img src="images/Playstore.png" />
                <img src="images/Applestore.png" />
              </div>
            </div>
            <div className="footer-col-2">
              <img src="images/EbookStore-Logo-footer.png" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis, Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Twitterr</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2020 - EbookStore</p>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
