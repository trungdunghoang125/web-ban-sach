function EBoookScreen() {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="index.html">
                            <img src="images/EbookStore-Logo.png" alt="EbookStore-Logo" />
                        </a>
                    </div>


                    <nav>
                        <ul id="MenuItems">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="ebooks.html">Ebooks</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="account.html">Account</a></li>
                        </ul>
                    </nav>
                    <a href="cart.html">
                        <img
                            src="images/cart.png"
                            alt="Shoping Cart"
                            className="shopping-cart"
                        />
                    </a>
                    <img src="images/menu.png" className="menu-icon" onclick="menutoggle()" />
                </div>
            </div>

            <div className="small-container">
                <div className="row row-2">
                    <h2>All Ebooks</h2>
                    <select>
                        <option>Default sorting</option>
                        <option>Sort by price</option>
                        <option>Sort by popularity</option>
                        <option>Sort by rating</option>
                        <option>Sort by sale</option>
                    </select>
                </div>

                <div className="row">
                    <div className="col-4">
                        <a href="book-detail.html">
                            <img src="images/Book 4.jpg" alt="Book 4" />
                        </a>
                        <a href="book-detail.html"> <h4>Anna Karenina</h4> </a>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 5.jpg" alt="Book 5" />
                        <h4>Watership Down</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 6.jpg" alt="Book 6" />
                        <h4>All The Night We Cannot See</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 7.jpg" alt="Book 7" />
                        <h4>The HOBBIT</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="images/Book 8.jpg" alt="Book 8" />
                        <h4>Anna Karenina</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 9.jpg" alt="Book 9" />
                        <h4>Watership Down</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 10.jpg" alt="Book 10" />
                        <h4>All The Night We Cannot See</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 11.jpg" alt="Book 11" />
                        <h4>The HOBBIT</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="images/Book 12.jpg" alt="Book 12" />
                        <h4>Anna Karenina</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 13.jpg" alt="Book 13" />
                        <h4>Watership Down</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 14.jpg" alt="Book 14" />
                        <h4>All The Night We Cannot See</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                    <div className="col-4">
                        <img src="images/Book 15.jpg" alt="Book 15" />
                        <h4>The HOBBIT</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>Rs.500</p>
                    </div>
                </div>


                <div className="youtube-container">
                    <div className="youtube-row">
                        <div className="col-2">
                            <h2>5 Books You Must Read If You're Serious About Success</h2>
                        </div>
                        <div className="col-2">
                            <iframe
                                id="youtubevideo"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/LqJBXtG9xxk"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>




                <div className="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594;</span>
                </div>
            </div>



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
        </>
    );
}

export default EBoookScreen;