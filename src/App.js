
import './App.css';
import Navbar from './components/navabar/navbar';

import {useSelector} from 'react-redux'
import { products } from './utils/products';
import Card from './components/cart/card';



function App() {
  const isLogged=useSelector((state)=>state.auth.isLogged)
  const cartItems=useSelector((state)=>state.cart.itemslist);
  
 
  console.log(isLogged)


  return (
    <div className="App">
      <Navbar/>
      
      {isLogged? <div>
        <h1>Layout</h1>

        <div className='cartlist'>
          {
            products.map((product)=><Card product={product} />)
          }
        </div>

        <div className='cartlist'>
          <h1>Cart products</h1>
          {
            cartItems.map((product)=><Card product={product} />)
          }
        </div>


      </div>:<div>
      <h1>Login</h1>
        </div>}
      
      
    </div>
  );
}

export default App;
