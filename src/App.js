
import './App.css';
import Navbar from './components/navabar/navbar';

import {useSelector,useDispatch} from 'react-redux'
import { products } from './utils/products';
import Card from './components/cart/card';
import { cartActions } from './store/cartSlice';

function App() {
  const isLogged=useSelector((state)=>state.auth.isLogged)
  const cartItems=useSelector((state)=>state.cart.itemslist);
  console.log(cartItems)
  const dispatch=useDispatch();
  console.log(isLogged)

const onAddTocart=(product)=>{
  dispatch(cartActions.addCart(product));
}
  return (
    <div className="App">
      <Navbar/>
      
      {isLogged? <div>
        <h1>Layout</h1>

        <div className='cartlist'>
          {
            products.map((product)=><Card product={product} addtoCart={onAddTocart(product)}/>)
          }
        </div>

        <div className='cartlist'>
          <h1>Cart products</h1>
          {
            cartItems.map((product)=><Card product={product} addtoCart={onAddTocart(product)}/>)
          }
        </div>


      </div>:<div>
      <h1>Login</h1>
        </div>}
      
      
    </div>
  );
}

export default App;
