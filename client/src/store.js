import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk";
import data from "./data"
import { productListReducer } from "./reducers/productReducers";

const initialState= {};
const reducer= combineReducers({
    productList: productListReducer,
});

// const reducer= (state, action) => {
//     return {products: data.products};
// }
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;   

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store; 