import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";

export default function CartScreen(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const productId = id;

    const { search } = useLocation();
    //const qty= props.location.serach ? Number (props.location.serach.split('=')[1])
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;


    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [productId, qty])

    const removeFromCartHandler = (id) => {
        //delete action 
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        navigate('/signin?redirect=/shipping');
    };

    return (
        <div className="">
            <div className="small-container cart-page">
                <h1>Your Cart</h1>
                {cartItems.length === 0 ? <MessageBox>
                    Cart is empty. <Link to="/">Go Shopping</Link>
                </MessageBox>
                    :
                    (
                        <div>
                            <table>
                                <tr>
                                    <th>Ebook</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                                {
                                    cartItems.map((item) => (
                                        <tr key={item.product}>
                                            <td>
                                                <div className="cart-info">
                                                    <img src={`/${item.image}`} alt={item.name} />
                                                    <div>
                                                        <Link to={`/product/${item.product}`}><p>{item.name}</p></Link>
                                                        <small>Price: Rs500.00</small> <br />
                                                        <button type="button" onClick={() => removeFromCartHandler(item.product)}>Remove</button>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                                <select
                                                    value={item.qty}
                                                    onChange={(e) => dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )}
                                                >
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td>${item.price}</td>

                                        </tr>
                                    ))
                                }
                            </table>


                            <div className="total-price">
                                <table>
                                    <tr>
                                        <td>Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)</td>
                                        <td>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</td>
                                    </tr>

                                    <tr>     
                                        <td className="center">
                                            <button
                                                type="button"
                                                onClick={checkoutHandler}
                                                className="btn primary block"
                                                disabled={cartItems.length === 0}
                                            >
                                                Proceed to Checkout
                                            </button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};