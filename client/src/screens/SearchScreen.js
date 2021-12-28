import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from '../components/Product';
import Rating from '../components/Rating';
export default function SearchScreen() {

    const { name = 'all', category = 'all'} = useParams();
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products/*, page, pages*/ } = productList;


    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(
            listProducts({
                //pageNumber,
                name: name !== 'all' ? name : '',
                category: category !== 'all' ? category : '',
                // min,
                // max,
                // rating,
                // order,
            })
        );
    }, [category, dispatch, /*max, min,*/ name, /*order, rating, pageNumber*/]);

    const getFilterUrl = (filter) => {
        //const filterPage = filter.page || pageNumber;
        const filterCategory = filter.category || category;
        const filterName = filter.name || name;
        // const filterRating = filter.rating || rating;
        // const sortOrder = filter.order || order;
        // const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
        // const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
        return `/search/category/${filterCategory}/name/${filterName}`;
    };
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
                {/* <div className="col-3">
                    <h3>Department</h3>

                    {loadingCategories ? (
                        <LoadingBox></LoadingBox>
                    ) : errorCategories ? (
                        <MessageBox variant="danger">{errorCategories}</MessageBox>
                    ) : (

                        <ul>
                            {categories.map((c) => (
                                <li key={c}>
                                    <Link
                                        className={c === category ? 'active' : ''}
                                        to={getFilterUrl({category:c})}>
                                        {c}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}



                </div> */}

                <div className="col-2">
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