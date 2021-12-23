import React from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";
export default function Navbar() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const signoutHandler = () => {
        dispatch(signout());
    };

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
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        {
                            userInfo ? (
                                <div className="dropdown">
                                    <li><Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i>{' '}</Link></li>
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
                                <li><Link to="/signin">Sign In</Link></li>
                            )}
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
                                    <li>
                                        <Link to="/support">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
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
                <img src="images/menu.png" className="menu-icon" />
            </div>
        </>
    );
}