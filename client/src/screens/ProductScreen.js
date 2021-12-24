import React, { useEffect, useState } from "react";
import data from "../data";
import Rating from "../components/Rating";
import { Link, useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/productActions";


function ProductScreen(props) {
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    // const product = data.products.find((p) => p._id === id);
    const productId = id;
    const dispatch = useDispatch();
    // const productId= props.match.params.id;

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    // if (!product) {
    //     return <div>Not Found</div>
    // }

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);


    const addToCartHandler = () => {
        navigate(`/cart/${productId}?qty=${qty}`);
    };

    return (
        <>
            {loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    :
                    (
                        <div>
                            <Link to="/">Back</Link>
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
                                        <h3>Status</h3>
                                        <div>
                                            {product.countInStock > 0 ? (
                                                <span className="success">In Stock</span>
                                            ) : (
                                                <span className="danger">Unavailable</span>
                                            )}
                                        </div>

                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                    <div>

                                                        <h3>Qty</h3>
                                                        <div>
                                                            <select
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                )
                                                                )}
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="btn primary block" onClick={addToCartHandler}>Add To Cart</button>
                                                    </div>
                                                </>
                                            )
                                        }

                                        <h3>Book Deatails <i className="fa fa-indent"></i></h3>
                                        <br />
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    )}

        </>
    );
}

export default ProductScreen;