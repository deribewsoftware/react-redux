import './card.css'
import {useDispatch} from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const Card = ({product}) => {
  const dispatch=useDispatch();
  const onAddTocart=()=>{
    dispatch(cartActions.addCart(product));
  }
  return ( 
    <div className="card">

      <div>
        <img src={product.image} alt={product.name} />
      </div>

      <div className='name'>{product.name}</div>
      <div className="flex">
        
        <div>${product.price}</div>
        <div>Qty:${product.quantity}</div>
        <div>{product.status}</div>
      </div>
      <button onClick={onAddTocart}>Add to Cart</button>

      

    </div>
   );
}
 
export default Card;