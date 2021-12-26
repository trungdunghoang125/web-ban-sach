import React, { useEffect, useState, getAllNotes } from "react"
import axios from "axios"
import data from "../data.js"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link, useParams, useNavigate } from "react-router-dom"
import Product from "../components/Product.js";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";


export default function HomeScreen(props) {
    const product = props;
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const userTopSellersList = useSelector((state) => state.userTopSellersList);
    const {
        loading: loadingSellers,
        error: errorSellers,
        users: sellers,
    } = userTopSellersList;


    useEffect(() => {
        dispatch(listProducts({}));
        dispatch(listTopSellers());
    }, [dispatch]);

    return (
        <>
            {loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    :
                    (
                        <div>
                            <div className="categories">
                                <div className="small-container">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="images/Book1.jpg" alt="Book 1" />
                                        </div>
                                        <div className="col-3">
                                            <img src="images/Book2.jpg" alt="Book 2" />
                                        </div>
                                        <div className="col-3">
                                            <img src="images/Book3.jpg" alt="Book 3" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="small-container">
                                <h2 className="title">Best Sellers</h2>
                                {loadingSellers ? (
                                    <LoadingBox></LoadingBox>
                                ) : errorSellers ? (
                                    <MessageBox variant="danger">{errorSellers}</MessageBox>
                                ) : (
                                    <div className="row">
                                        {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
                                        <Carousel showArrows autoPlay showThumbs={false}>
                                            {sellers.map((seller) => (
                                                <div key={seller._id}>
                                                    <Link to={`/seller/${seller._id}`}>
                                                        <img src={seller.seller.logo} alt={seller.seller.name} />
                                
                                                        <p className="legend">{seller.seller.name}</p>
                                                    </Link>
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                )}

                                {/* <div className="row">
                                    {products.map((product) => (
                                        <Product key={product._id} product={product}></Product>
                                    ))}
                                </div> */}

                                <h2 className="title">Ebooks</h2>
                                <div className="row">
                                    {products.map((product) => (
                                        <Product key={product._id} product={product}></Product>
                                    ))}

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
                                            <div key={product._id}><Link to={`/product/${product._id}`} className="btn">Buy Now &#8594;</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="testimonial">
                                <div className="small-container">
                                    <div div className="row">
                                        <div className="col-4">
                                            <i className="fa fa-quote-left"></i>
                                            <p>
                                                Team leader
                                            </p>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
                                            <h3>Luong Ngoc Dang</h3>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-quote-left"></i>
                                            <p>
                                                Member
                                            </p>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <img src="images/Boo12.jpg" alt="zeeshansaeed" />
                                            <h3>Hoang Trung Dung</h3>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-quote-left"></i>
                                            <p>
                                                Member
                                            </p>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
                                            <h3>Nguyen Van Tam</h3>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-quote-left"></i>
                                            <p>
                                                Member
                                            </p>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <img src="images/zeeshan.jpg" alt="zeeshansaeed" />
                                            <h3>Nguyen Van Luan</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="publishers">
                                <div className="small-container">
                                    <div className="row">
                                        <div className="col-5">
                                            <img src="images/publisher1.jpg" alt=""/>
                                        </div>
                                        <div className="col-5">
                                            <img src="images/publisher2.png" alt="" />
                                        </div>
                                        <div className="col-5">
                                            <img src="images/publisher3.jpeg" alt=""/>
                                        </div>
                                        <div className="col-5">
                                            <img src="images/publisher4.jpg" alt="" />
                                        </div>
                                        <div className="col-5">
                                            <img src="images/publisher5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
        </>
    )
}