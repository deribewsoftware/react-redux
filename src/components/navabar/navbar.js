import { authActions } from '../../store/authSlice';
import './navbar.css';
import {useSelector,useDispatch} from 'react-redux'


const Navbar = () => {
  const isLogged=useSelector((state)=>state.auth.isLogged);
  const dispatch=useDispatch()
  const onLogin=()=>{
    dispatch(authActions.login());
  }
  const onLogout=()=>{
    dispatch(authActions.logout());
  }
  return (
     <div className="navbar">
      <div>home</div>
      <div>Producst</div>
      <div className='auth'>
        {!isLogged&&<button onClick={onLogin}>Login</button>}
        {!isLogged&&<button onClick={onLogin}>Signup</button>}
        {isLogged&&<button onClick={onLogout}>Logout</button>}
      </div>
      <div>cart</div>
      


  </div> );
}
 
export default Navbar;