import React from "react"
import { Helmet } from "react-helmet"
import data from './data.js'
function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="index.html">
                <img src="images/EbookStore-Logo.png" alt="EbookStore-Logo"
                /></a>
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



      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src="images/Book 1.jpg" alt="Book 1" />
            </div>
            <div className="col-3">
              <img src="images/Book 2.jpg" alt="Book 2" />
            </div>
            <div className="col-3">
              <img src="images/Book 3.jpg" alt="Book 3" />
            </div>
          </div>
        </div>
      </div>



      <div className="small-container">
        <h2 className="title">Help-self</h2>
        {data.products.map((product) => (
          <div className="row">
            <div key= {product._id} className="col-4">
              <a href={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <a href={`/product/${product._id}`}> <h4>Anna Karenina</h4></a>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>{product.price}</p>
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


        ))}


        <h2 className="title">Bestsellers</h2>
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
      </div>



      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="images/offer-Book.jpg" className="offer-img" />
            </div>
            <div className="col-2">
              <p>Available on EbookStore</p>
              <br />
              <h2>I Don't Want To Die Poor</h2>
              <br />
              <small>
                Making Michael Arceneaux's I Don't Want to Die Poor required
                reading in high schools across the country would help a lot of
                young people think twice about the promise that going to college
                at any cost is the only path to upward social mobility.
              </small>
              <a href="#" className="btn">Buy Now &#8594;</a>
            </div>
          </div>
        </div>
      </div>



      <div className="testimonial">
        <div className="small-container">
          <div div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                debitis perferendis, necessitatibus ipsum quia ad sit amet.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
              <h3>Your Name</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                debitis perferendis, necessitatibus ipsum quia ad sit amet.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
              <h3>Your Name</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                debitis perferendis, necessitatibus ipsum quia ad sit amet.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
              <h3>Your Name</h3>
            </div>
          </div>
        </div>
      </div>



      <div className="publishers">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src="images/publisher1.jpg" />
            </div>
            <div className="col-5">
              <img src="images/publisher2.png" />
            </div>
            <div className="col-5">
              <img src="images/publisher3.jpeg" />
            </div>
            <div className="col-5">
              <img src="images/publisher4.jpg" />
            </div>
            <div className="col-5">
              <img src="images/publisher5.jpg" />
            </div>
          </div>
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

export default App;
