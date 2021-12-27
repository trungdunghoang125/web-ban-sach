import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../actions/productActions";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from '../components/Product';
import Rating from '../components/Rating';
export default function SearchScreen() {

    const { name = 'all' } = useParams();
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products/*, page, pages*/ } = productList;
    useEffect(() => {
        dispatch(
            listProducts({
                //pageNumber,
                name: name !== 'all' ? name : '',
                // category: category !== 'all' ? category : '',
                // min,
                // max,
                // rating,
                // order,
            })
        );
    }, [/*category,*/ dispatch, /*max, min,*/ name, /*order, rating, pageNumber*/]);
    return (
        <div>
            <div className="row">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div>{products.length} Results</div>
                )}
            </div>

            <div className="row top">
                <div className="col-1">
                    <h3>Department</h3>

                    <ul>
                        <li>Catefory 1</li>
                    </ul>
                </div>

                <div className="">
                    {loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <>
                            

                            {products.length === 0 && (
                                <MessageBox>No Product Found</MessageBox>
                            )}
                            <div className="row center">
                                {products.map((product) => (
                                    <Product key={product._id} product={product}></Product>
                                ))}
                            </div>
                            {/* <div className="row center pagination">
                                {[...Array(pages).keys()].map((x) => (
                                    <Link
                                        className={x + 1 === page ? 'active' : ''}
                                        key={x + 1}
                                        to={getFilterUrl({ page: x + 1 })}
                                    >
                                        {x + 1}
                                    </Link>
                                ))}
                            </div> */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}