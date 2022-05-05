import React from 'react'
import { Card, Cardmedia, CardContent, CardActions, Typrography, IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'


const Product = ({product}) => {
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
            
        </CardActions>



    </Card>
  )
}

export default Product