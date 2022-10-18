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
    requests_product(setProducts)
  }, [])

  return (
    <Context.Provider value={{ products }}>
      <NavMenu />
      
      <Routes>
        <Route path='/list_products' element={<ListProducts />}/>
        <Route path='/basket_products' element={<BasketProducts />}/>
      </Routes>
      
    </Context.Provider>
  );
}

export default App;
