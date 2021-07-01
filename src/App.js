import './App.css';
import Parent from './Parent';
import Counter from './Context';
import {useState} from 'react';

function App() {
  let count=useState(0);
  return (
    <Counter.Provider value={count}>
      <div>
        <Parent/>
      </div>
    </Counter.Provider>
  );
}

export default App;
