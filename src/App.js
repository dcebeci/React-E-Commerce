import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './Components';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
  
      setProducts(data);
    };

    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
  
    const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);
  
      setCart(item.cart);
    };



    useEffect(() => {
      fetchProducts();
      fetchCart();
    },[]);
    console.log(products);

  return (
    <Router>
    <div>
      <Navbar totalItems={cart.total_items} handleDrawerToggle={handleAddToCart}  />
      <Routes>
        <Route exact path='/'>   
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
        </Route>
        <Route exact path='/cart'>
          <Cart cart={cart} />
        </Route>
       
     
      </Routes>
      
    </div>
    </Router>
    
  )
}

export default App;