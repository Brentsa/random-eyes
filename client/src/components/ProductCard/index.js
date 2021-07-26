import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//Material UI imports
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BackspaceIcon from '@material-ui/icons/Backspace';
//******************* REDUX CONTENT
import { useSelector, useDispatch } from 'react-redux';
import { set_current_product } from '../../redux/features/productSlice';

//custom styles that can be set in JS for Material-UI
const useStyles = makeStyles({
  root: {
    minWidth: 800,
  },
  media: {
    height: 600,
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

    //called to load a new product into the product card
    function loadNewProduct(){
        //update the current product to a random product in the product list
        const randomProduct = Math.floor(Math.random() * products.length);
        dispatch(set_current_product({product: products[randomProduct]}));
    }

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={require(`../../assets/images/Product Images/${currentProduct.image}`).default}
                title={currentProduct.name}
            />

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
                <Button size="large" variant="outlined" color="primary" startIcon={<AddShoppingCartIcon/>}>
                    Add Product to Cart
                </Button>
            </Grid>
            
        </Card>
    );
}

export default ProductCard;