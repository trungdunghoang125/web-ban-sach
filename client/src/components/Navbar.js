import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";
import SearchBox from "./SearchBox";
//import { listProductCategories } from './actions/productActions';
import { Helmet } from "react-helmet";
import { listProductCategories } from "../actions/productActions";


export default function Navbar() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const signoutHandler = () => {
        dispatch(signout());
    };

    // const menutoggle = () => {
    //     const MenuItems = document.getElementById("MenuItems");
    //     MenuItems.style.maxHeight = "0px";
    //     if (MenuItems.style.maxHeight === "0px") {
    //         MenuItems.style.maxHeight = "200px";
    //     } else {
    //         MenuItems.style.maxHeight = "0px";
    //     }

    // };

    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/EbookStore-Logo.png" alt="EbookStore-Logo" />
                    </Link>
                </div>

                <nav>
                    <ul id="MenuItems">

                        <li><SearchBox /></li>

                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            {
                                userInfo ? (
                                    <div className="dropdown">
                                        <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i>{' '}</Link>
                                        <ul className="dropdown-content">
                                            <li>
                                                <Link to="/profile">User Profile</Link>
                                            </li>
                                            <li>
                                                <Link to="/orderhistory">Order History</Link>
                                            </li>
                                            <li>
                                                <Link to="#signout" onClick={signoutHandler}>
                                                    Sign Out
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                ) : (
                                    <Link to="/signin">Sign In</Link>
                                )}
                        </li>
                        <li>
                            {userInfo && userInfo.isSeller && (
                                <div className="dropdown">
                                    <Link to="#admin">
                                        Seller <i className="fa fa-caret-down"></i>
                                    </Link>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/productlist/seller">Products</Link>
                                        </li>
                                        <li>
                                            <Link to="/orderlist/seller">Orders</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            {userInfo && userInfo.isAdmin && (
                                <div className="dropdown">
                                    <Link to="#admin">
                                        Admin <i className="fa fa-caret-down"></i>
                                    </Link>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="/productlist">Products</Link>
                                        </li>
                                        <li>
                                            <Link to="/orderlist">Orders</Link>
                                        </li>
                                        <li>
                                            <Link to="/userlist">Users</Link>
                                        </li>

                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
                <Link to="/cart/:id">
                    <img
                        src="/images/cart.png"
                        alt="Shoping Cart"
                        className="shopping-cart"
                    />
                    {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )}
                </Link>
                <input type="checkbox" id="btnControl" />
                <label className="check-btnControl" for="btnControl">
                    <img src="images/menu.png" className="menu-icon" alt="" /*onClick={menutoggle}*/ />
                </label>

                {/* <Helmet>
                    <script>
                        var MenuItems = document.getElementById("MenuItems");
                        MenuItems.style.maxHeight = "0px";
                        function menutoggle() {
        if (MenuItems.style.maxHeight == "0px") {
                            MenuItems.style.maxHeight = "200px";
        } else {
                            MenuItems.style.maxHeight = "0px";
        }
      }
                    </script>
                </Helmet> */}
            </div>
        </div>
    );
}