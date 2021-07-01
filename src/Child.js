import { useContext } from 'react';
import './App.css';
import Counter from './Context';

function Child() {
    let counterValue=useContext(Counter);
    console.log(counterValue);
  return (
    <div>
        <h1>Using Context API</h1>
        <h1>Counter Value = {counterValue[0]}</h1>
        <button onClick={()=>{counterValue[1](counterValue[0]+1)}}>Increment</button>
        <button onClick={()=>{counterValue[1](counterValue[0]-1)}}>Decrement</button>
        <br/>
        <br/>
        <a href="https://flaviocopes.com/react-hook-usereducer/?fbclid=IwAR13sqi4KPqoJlQioJXPZNJs-x0nsppjzulG3NAYeirDftaCv-pJ-OAGdOQ">Reducer Theory</a>
        <h1>Using Reducer</h1>
        {/*https://flaviocopes.com/react-hook-usereducer/?fbclid=IwAR13sqi4KPqoJlQioJXPZNJs-x0nsppjzulG3NAYeirDftaCv-pJ-OAGdOQ*/}
    </div>
  );
}

export default Child;
