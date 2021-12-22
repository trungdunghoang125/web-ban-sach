import React from "react"
import { Helmet } from "react-helmet"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import data from "./data.js"
import Product from "./components/Product.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import Navbar from "./components/Navbar.js";
import HeroSection from "./components/HeroSection.js";
import Footer from "./components/Footer.js";
import CartScreen from "./screens/CartScreen.js";
import { useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";

function App() {

  return (
    <BrowserRouter>
      <div className="header">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
        </div>
      </div>

      <Routes>
        <Route path="/cart/:id" element={<CartScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} exact />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
