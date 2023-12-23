
import './App.css';
import {actions} from './store'
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch();

const increase=()=>{
  dispatch(actions.increment());


}
const decrease=()=>{
  dispatch(actions.decrement());
}
  const addTen=()=>{
    dispatch(actions.add10(10) )
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={increase}> Increase</button>
      <button onClick={decrease}> Decrease</button>

      <button onClick={addTen}> Add by 10</button>
      
    </div>
  );
}

export default App;
