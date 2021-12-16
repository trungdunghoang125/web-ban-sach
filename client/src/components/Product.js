import React from "react";
import data from "../data";
import Rating from "./Rating";

function Product(props) {
    const { product } = props;
    return (
        <>
            <div key={product._id} className="col-4">
                <a href={`/product/${product._id}`}>
                    <img src={`/${product.image}`} alt={product.name} />
                </a>
                <a href={`/product/${product._id}`}> <h4>Anna Karenina</h4></a>
                <Rating rating={product.rating}></Rating>
                <p>{product.price}</p>
            </div>

        </>
    );
}

export default Product;