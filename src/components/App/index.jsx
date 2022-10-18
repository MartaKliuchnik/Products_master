import { useEffect, useState } from 'react';
import {Context} from '../../context'
import BasketProducts from '../../pages/BasketProducts';
import { requests_product } from '../../requests/products';
import ListProducts from '../../pages/ListProducts';
import {Routes, Route} from 'react-router-dom'
import NavMenu from '../NavMenu';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    products.map(product => product.basket = false);
    requests_product(setProducts);
  }, []);

  const addToBasket = (id) => {
    products.map(product => (product.id === id)
      ? product.basket = true
      : product.basket);
    console.log(products);
    return setProducts([...products]);
  }

  return (
    <Context.Provider value={{ products, addToBasket }}>
      <NavMenu />
      
      <Routes>
        <Route path='/list_products' element={<ListProducts />}/>
        <Route path='/basket_products' element={<BasketProducts />}/>
      </Routes>
      
    </Context.Provider>
  );
}

export default App;
