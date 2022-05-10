import React from 'react'
import { Card,  CardContent, CardActions, IconButton} from '@material-ui/core'
import {Typography} from '@mui/material';
import Cardmedia from '@mui/material/Cardmedia';
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <Cardmedia className={classes.media} image='' title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typrography variant='h5' gutterBottom>
                    {product.name}
                </Typrography>
                <Typrography variant='h5' >
                    {product.name}
                </Typrography>
            </div>
            <Typrography variant='h2' color='textSecondary'>{product.name}</Typrography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
           <IconButton aria-lable="Add to Cart">
               <AddShoppingCart />
           </IconButton>
        </CardActions>



    </Card>
  )
}

export default Product