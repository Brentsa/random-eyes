//import create slice function from the redux toolkit
import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    //name of the slice
    name: 'product',

    //initial state used
    initialState: {
        products: []
    },

    //reducers that affect state
    reducers: {
        //update the products slice to hold a new array of products
        update_products(state, action){
            return {
                products: [...action.payload.products]
            }
        }
    }
});

//export action functions for use within state dispatch
export const {update_products} = productSlice.actions;

//export the reducers for the store
export default productSlice.reducer;