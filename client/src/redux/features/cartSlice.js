//import create slice function from the redux toolkit
import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    //name of the slice
    name: 'cart',

    //initial state used
    initialState: {
        cart: []
    },

    //reducers that affect state
    reducers: {
        //add a product to the cart and leave remaining state
        add_to_cart: (state, action) => {
            return {
                cart: [...state.cart, action.payload.product]
            }
        },
        //remove a product from the cart using it's id
        remove_from_cart: (state, action) => {
            return {
                cart: state.cart.filter(item => item._id !== action.payload._id)
            }
        },
        //clear the cart completely
        clear_cart: () => {
            return {
                cart: []
            }
        }
    }
});

//export action functions for use within state dispatch
export const {add_to_cart, remove_from_cart, clear_cart} = cartSlice.actions;

//export the reducers for the store
export default cartSlice.reducer;