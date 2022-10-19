import { useEffect, useState } from 'react';
import {Context} from '../../context'
import BasketProducts from '../../pages/BasketProducts';
import { requests_product } from '../../requests/products';
import ListProducts from '../../pages/ListProducts';
import {Routes, Route} from 'react-router-dom'
import NavMenu from '../NavMenu';

function App() {

  const [products, setProducts] = useState([]);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    requests_product(setProducts);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('orders');
    setOrders(JSON.parse(data))
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

    const addToBasket = (id, title, price, image) => setOrders([...orders,
        {
          id,
          title,
          price,
          image,
          count: 1,
          basket: true
        }
      ])
  

  const incrementCount = (id) => {
    orders.map(order => order.id === id
      ? ++order.count
      : ''
    )
    setOrders([...orders])
  }
  
  const decrementCount = (id) => {
    const target = orders.find(order => order.id === id);
    if (target.count > 1) {
      target.count--
    } else {
      target.count = 0
    }
    setOrders([...orders])
  }
  
  const deleteProductInBasket = (id) => setOrders(orders.filter(order => order.id !== id));
  

  return (
    <Context.Provider
      value={{ orders, products, addToBasket, deleteProductInBasket, incrementCount, decrementCount }}>
      <NavMenu />
      
      <Routes>
        <Route path='/list_products' element={<ListProducts />}/>
        <Route path='/basket_products' element={<BasketProducts />}/>
      </Routes>
      
    </Context.Provider>
  );
}

export default App;
