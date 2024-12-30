import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1);
  }

  const subCount = () => {
    if(count <= 0) return
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={addCount}>Increment</button>
      <button onClick={subCount}>Decrement</button>
    </>
  )
}

export default App
