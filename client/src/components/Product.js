import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import Rating from "./Rating";

function Product(props) {
    const { product } = props;
    return (
        <>
            <div key={product._id} className="col-4">
                <Link to={`/product/${product._id}`}>
                    <img src={`/${product.image}`} alt={product.name} />
                </Link>
                <Link to={`/product/${product._id}`}> <h4>{product.name}</h4></Link>
                <Rating rating={product.rating}></Rating>
                <p>{product.price}</p>
            </div>

        </>
    );
}

export default Product;