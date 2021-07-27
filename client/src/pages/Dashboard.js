import React, { useEffect, useState } from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';

//Material UI imports
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../components/ProductCard';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 1000,
    },
    backgroundPurple: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: 10,
        marginBottom: 10
    }
});

function Dashboard(){

    const classes = useStyles();

    const {loading, data} = useQuery(QUERY_ALL_PRODUCTS);
    const [currentProduct, setCurrentProduct] = useState({
        name: 'Smartphone',
        description: 'Top tier smartphone for you to connect with the world',
        category: "",
        price: 649.99,
        image: 'smartphone.jpg'
    });

    useEffect(()=>{
        if(data){
            const {products} = data;
            const randomProduct = Math.floor(Math.random() * products.length);
            setCurrentProduct(products[randomProduct]);
        }
    }, [loading, data]);

    function loadNewProduct(){
        if(data){
            const {products} = data;
            const randomProduct = Math.floor(Math.random() * products.length);
            setCurrentProduct(products[randomProduct]);
        }
    }

    if(!Auth.loggedIn()){
        return <h1>Please login to begin viewing products!</h1>
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            <div className={`${classes.root} ${classes.backgroundBlue}`}>
                <Typography variant='inherit' component="h2" >
                    Welcome Back {Auth.getProfile().data.username}. Happy Shopping!
                </Typography>
            </div>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                padding="1em"
                alignItems="center"
                className={classes.padding}
            >
                <ProductCard currentProduct={currentProduct} loadNewProduct={loadNewProduct}/>
            </Grid>
        </div>
    );
};

export default Dashboard;