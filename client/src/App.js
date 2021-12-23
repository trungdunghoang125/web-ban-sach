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
import ShippingAddressScreen from "./screens/ShippingAddressScreen.js";
import PaymentMethodScreen from "./screens/PaymentMethodScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import OrderHistoryScreen from "./screens/OrderHistoryScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import PrivateRoute from "./components/PrivateRoute.js";
import ProductListScreen from "./screens/ProductListScreen.js";
import AdminRoute from "./components/AdminRoute.js";

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
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route path="/payment" element={<PaymentMethodScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/orderhistory" element={<OrderHistoryScreen />} />
        <Route path="/profile" element={<PrivateRoute><ProfileScreen /></PrivateRoute>} />
        <Route
          path="/productlist"
          element={
            <AdminRoute>
              <ProductListScreen />
            </AdminRoute>
          }
        />
        <Route path="/" element={<HomeScreen />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
