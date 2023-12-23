import './card.css'

const Card = ({product,addtoCart}) => {
  return ( 
    <div className="card">

      <div>
        <img src={product.image} alt={product.name} />
      </div>

      <div className='name'>{product.name}</div>
      <div className="flex">
        
        <div>${product.price}</div>
        <div>{product.status}</div>
      </div>
      <button onClick={()=>addtoCart}>Add to Cart</button>

      

    </div>
   );
}
 
export default Card;