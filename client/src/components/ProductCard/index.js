import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BackspaceIcon from '@material-ui/icons/Backspace';

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

function ProductCard({currentProduct, loadNewProduct}){

    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={require(`../../assets/images/Product Images/${currentProduct.image}`).default}
                title={currentProduct.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                    {currentProduct.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h3">
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