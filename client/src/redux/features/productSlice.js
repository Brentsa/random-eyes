//import create slice function from the redux toolkit
import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    //name of the slice
    name: 'product',

    //initial state used
    initialState: {
        products: [],
        currentProduct: {
            name: 'Smartphone',
            description: 'Top tier smartphone for you to connect with the world',
            category: {
                _id: "jsdlfjslfjsljdf",
                name: "technology"
            },
            price: 649.99,
            image: 'smartphone.jpg'
        }
    },

    //reducers that affect state
    reducers: {
        //update the products slice to hold a new array of products
        update_products(state, action){
            return {
                products: [...action.payload.products]
            }
        },
        //changes the active product to be displayed
        set_current_product(state, action){
            return {
                ...state,
                currentProduct: action.payload.product
            }
        }
    }
});

//export action functions for use within state dispatch
export const {update_products, set_current_product} = productSlice.actions;

//export the reducers for the store
export default productSlice.reducer;