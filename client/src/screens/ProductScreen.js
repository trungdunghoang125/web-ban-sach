import React from "react";
import data from "../data";
import Rating from "../components/Rating";
import { Link, useParams } from "react-router-dom"

function ProductScreen() {
    const { id } = useParams();
    const product = data.products.find((p) => p._id === id);
    if (!product) {
        return <div>Not Found</div>
    }
    return (
        <>
            <div class="small-container single-product">
                <div key={product._id} className="row">
                    <div className="col-2">
                        <img src={`/${product.image}`} alt={product.name} />
                    </div>
                    <div className="col-2">
                        <p>Home / Ebook</p>
                        <h1>{product.name}</h1>
                        <Rating rating={product.rating}></Rating>
                        <h4>{product.price}</h4>
                        <input type="number" value="1" />
                        <a href="" className="btn">Add To Cart</a>
                        <h3>Book Deatails <i className="fa fa-indent"></i></h3>
                        <br />
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
          
            <div className="small-container">
                <div className="row row-2">
                    <h2>Related Books</h2>
                    <p>View More</p>
                </div>
            </div>
          
            <div className="small-container">
                <div className="row">
                    <div className="col-4">
                        <img src="/images/Book 4.jpg" alt="Book 4" />
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
                        <img src="/images/Book 4.jpg" alt="Book 4" />
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
                        <img src="/images/Book 4.jpg" alt="Book 4" />
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
                        <img src="/images/Book 4.jpg" alt="Book 4" />
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
                </div>
            </div>

        </>
    );
}

export default ProductScreen;