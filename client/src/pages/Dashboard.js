import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
//Material UI imports
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../components/ProductCard';
import Grid from '@material-ui/core/Grid';
//******************* REDUX CONTENT
import { useDispatch } from 'react-redux';
import { update_products, set_current_product } from '../redux/features/productSlice';

//custom styles that can be set in JS for Material-UI
const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 1000,
    },
    backgroundPurple: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #800080 90%)',
        padding: 10,
        marginBottom: 10
    }
});

function Dashboard(){
    //use the custom css class styles
    const classes = useStyles();

    //define redux state management
    const dispatch = useDispatch();

    //query all product data
    const {loading, data} = useQuery(QUERY_ALL_PRODUCTS);

    useEffect(()=>{
        if(data){
            //update products array state
            dispatch(update_products({products: data.products}));

            //update the current product to a random product in the product list
            const randomProduct = Math.floor(Math.random() * data.products.length);
            dispatch(set_current_product({product: data.products[randomProduct]}));
        }
    }, [data, dispatch]);

    //if the user isnt logged in then they cannot view the products
    if(!Auth.loggedIn()){
        return <h1 id="home-info">Please login to begin viewing products!</h1>
    }

    //if the products are loading from the backend then show loading...
    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            <div className="dashboard-title">
                <Typography variant="h4" component="h4" >
                    Welcome To Your Dashboard {Auth.getProfile().data.username}!
                </Typography>
            </div>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                className={classes.padding}
            >
                <ProductCard/>
            </Grid>
        </div>
    );
};

export default Dashboard;