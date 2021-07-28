import React from 'react';
//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BackspaceIcon from '@material-ui/icons/Backspace';
//******************* REDUX CONTENT
import { useSelector, useDispatch } from 'react-redux';
import { set_current_product } from '../../redux/features/productSlice';
import { add_to_cart } from '../../redux/features/cartSlice';

//custom styles that can be set in JS for Material-UI
const useStyles = makeStyles({
  root: {
    width: 800
  },
  media: {
    maxWidth: "100%",
    height: 600,
    borderRadius: 6
  },
  padding: {
    padding: 10,
  }
});

//Product Card component
function ProductCard(){
    //use the custom css class styles
    const classes = useStyles();

    //define redux state management
    const dispatch = useDispatch();
    const {products, currentProduct} = useSelector(state => state.productState);
    const {cart} = useSelector(state => state.cartState);

    //called to load a new product into the product card
    function loadNewProduct(){
        //update the current product to a random product in the product list
        const randomProduct = Math.floor(Math.random() * products.length);
        dispatch(set_current_product({product: products[randomProduct]}));
    }

    //called when the add to cart button is clicked
    function addToCart(){
        //check if the current product is already in the cart
        var isItemInCart = false

        //if the current product is already in the cart then set cart boolean to true
        for(var i = 0; i < cart.length; i++){
            if(currentProduct._id === cart[i]._id) isItemInCart = true; 
        }

        //if the item is already in the cart then do not add it again
        if(isItemInCart) {
            console.log('item already in cart');
        }
        else {
            //add the current product to cart if it isn't already in the cart
            dispatch(add_to_cart({product: currentProduct}));
        }
        
        //once added then load a new product to look at
        loadNewProduct();
    }

    return (
        <Card className={classes.root}>

            <div className={classes.padding}>
                <CardMedia
                    className={classes.media}
                    image={require(`../../assets/images/Product Images/${currentProduct.image}`).default}
                    title={currentProduct.name}
                />
            </div>
            

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {currentProduct.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {currentProduct.category.name} - ${currentProduct.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {currentProduct.description}
                </Typography>
            </CardContent>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                className={classes.padding}
            >
                <Button size="large" variant="outlined" color="primary" startIcon={<BackspaceIcon/>} onClick={loadNewProduct}>
                    Show New Product
                </Button>
                <Button size="large" variant="outlined" color="primary" startIcon={<AddShoppingCartIcon/>} onClick={addToCart}>
                    Add Product to Cart
                </Button>
            </Grid>
            
        </Card>
    );
}

export default ProductCard;