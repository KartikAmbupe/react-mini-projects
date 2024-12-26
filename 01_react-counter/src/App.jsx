import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = () => {
    // counter++;
    console.log("Add clicked");
    setCounter(counter+1);
  }
  const subValue = () => {
    // counter--;
    console.log("Sub clicked");
    if(counter > 0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Value: {counter}</h2>
      <button
      onClick={addValue}
      >Increment</button>
      <br />
      <button
      onClick={subValue}
      >Decrement</button>
    </>
  )
}

export default App
