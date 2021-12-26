import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsUser } from '../actions/userActions';
import { listProducts } from "../actions/productActions";
import Product from '../components/Product';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
export default function SellerScreen() {
    const params = useParams();
    const { id: sellerId } = params;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;


    const productList = useSelector((state) => state.productList);
    const {
        loading: loadingProducts,
        error: errorProducts,
        products,
    } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsUser(sellerId));
        dispatch(listProducts({ seller: sellerId }));
    }, [dispatch, sellerId])
    return (
        <div className="w3-row">
            <div className="w3-col l4 container">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <ul className="card card-body">
                        <li>
                            <div className="row start">
                                <div className="p-1">
                                    <img
                                        className="small"
                                        src={`/${user.seller.logo}`}
                                        alt={user.seller.name}
                                    ></img>
                                    <li>
                                        <Rating
                                            rating={user.seller.rating}
                                            numReviews={user.seller.numReviews}
                                        // value={user.seller.rating}
                                        // text={`${user.seller.numReviews} review`}
                                        ></Rating>
                                    </li>
                                    <li>
                                        <a href={`mailto:${user.email}`}>Contact Seller</a>
                                    </li>
                                    <li>{user.seller.description}</li>

                                </div>
                                <div className="p-1">
                                    <h1>{user.seller.name}</h1>
                                </div>
                            </div>
                        </li>

                    </ul>
                )}
            </div>
            <div className="w3-col l8 s12">
                {loadingProducts ? (
                    <LoadingBox></LoadingBox>
                ) : errorProducts ? (
                    <MessageBox variant="danger">{errorProducts}</MessageBox>
                ) : (
                    <>
                        {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
                        <div className="row center">
                            {products.map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}