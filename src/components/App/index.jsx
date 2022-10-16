import { useEffect, useState } from 'react';
import {Context} from '../../context'
import {requests_product} from '../../requests/products'
import ProductsContainer from '../ProductsContainer';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    requests_product(setProducts)
  }, [])

  return (
    <Context.Provider value={{products}}>
      <ProductsContainer/>
    </Context.Provider>
  );
}

export default App;
