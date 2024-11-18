
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './Action';

function App() {

  const count= useSelector((state)=>state.count)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
