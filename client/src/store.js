import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import data from "./data"
import { cartReducer } from "./reducers/cartReducers";
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderMineListReducer,
    orderListReducer,
    orderDeleteReducer,
    orderDeliverReducer,
    orderSummaryReducer
} from "./reducers/orderReducers";
import {
    productDetailsReducer,
    productListReducer,
    productCreateReducer,
    productUpdateReducer,
    productDeleteReducer,
    productCategoryListReducer
} from "./reducers/productReducers";
import {
    userSigninReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
    userTopSellerListReducer
} from "./reducers/userReducers";

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethod: 'PayPal',
    }

};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userTopSellersList: userTopSellerListReducer,
    productCategoryList: productCategoryListReducer,
    orderSummary: orderSummaryReducer,
});

// const reducer= (state, action) => {
//     return {products: data.products};
// }
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store; 