//import configure store function and state slices to work with
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';

//Create a global store that will hold the states using the object structure below
const store = configureStore({
    reducer: {
        cartState: cartReducer,
        productState: productReducer
    }
})

//Export the store for use in index.js
export default store;

