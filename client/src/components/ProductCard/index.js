import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Photo from '../../assets/images/Product Images/camera.jpg'
import Grid from '@material-ui/core/Grid';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BackspaceIcon from '@material-ui/icons/Backspace';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 600,
  },
  padding: {
    padding: 10,
  }
});

function ProductCard(){

    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={Photo}
                title="Camera"
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Camera
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    $299.99
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                className={classes.padding}
            >
                <Button size="large" variant="outlined" color="primary" startIcon={<BackspaceIcon/>}>
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