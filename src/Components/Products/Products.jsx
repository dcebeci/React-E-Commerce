import React from "react";
import Grid from '@material-ui/core'


const products = [
    {id: 1 ,name:'Shoes', description: 'Runnig shoes.', price:'150₺'},
    {id: 2 ,name:'Macbook', description: 'Apple Macbook M1 Pro.', price:'25000₺'},
]

const Products = () => {
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product)=> (
                <Grid itemkey={product.id} xs={12} sm={6} md={4} lg={3}>
                   <product/>
                </Grid>
            ))}
        </Grid>
    </main>
}
export default Products;