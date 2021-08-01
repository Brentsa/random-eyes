import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 340,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    borderRadius: 6
  },
}));

export default function AddToCartModal({addToCart, productName}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(()=>{handleClose()}, 1500);
  };

  const handleClose = () => {
    setOpen(false);
    addToCart();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{productName} Added To Cart!</h2>
      <p id="simple-modal-description">
        Go to your cart to checkout.
      </p>
    </div>
  );

  return (
    <>
      <Button style={{margin: "10px"}} className="product-button" size="large" variant="outlined" color="primary" startIcon={<AddShoppingCartIcon/>} onClick={handleOpen}>
        Add Product to Cart
      </Button>
      <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
