import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const products= [
  { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '1500₺', image:'https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg'},
  { id: 2, name: 'Shoes', description: 'Running Shoes.', price: '1800₺', image:'https://i.insider.com/5e84e28f2d654f2c2469cc6b?width=1136&format=jpeg'},
  
];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

