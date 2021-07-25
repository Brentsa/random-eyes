import React from 'react';
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

    return (
        <div className="container">
            <div className={`${classes.root} ${classes.backgroundPurple}`}>
                <Typography variant="h2" component="h2" >
                    Welcome To Your Dashboard User!
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