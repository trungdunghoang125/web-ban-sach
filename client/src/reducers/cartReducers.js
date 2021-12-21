const { CART_ADD_ITEM } = require('../constants/cartConstants');

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((p) => p.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartItems: state.cartItems.map((p) => p.product === existItem.product ? item : p),
                };
            } else {
                return { ...state, error: '', cartItems: [...state.cartItems, item] };
            }
        default:
            return state;
    }
};