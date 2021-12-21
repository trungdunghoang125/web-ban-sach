import React from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function CartScreen(props){
    const {id} = useParams();
    const productId = id;

    const {search} = useLocation();
    //const qty= props.location.serach ? Number (props.location.serach.split('=')[1])
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;
    
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>Add To Cart : ProductID: {productId} Qty: {qty}</p>
        </div>
    );
};