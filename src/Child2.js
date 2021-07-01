import { useReducer } from "react";
import Reducer from './Reducer';


const Child2=()=>{
    let [state,dispatch]=useReducer(Reducer,0);
    console.log(state);
    return(
        <div>
            <h1>Counter Value = {state}</h1>
            <button onClick={()=>dispatch('INCREMENT')}>Increment</button>
            <button onClick={()=>dispatch('DECREMENT')}>Decrement</button>
        </div>
    )
}
export default Child2;