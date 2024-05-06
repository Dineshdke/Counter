import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount((count)=>count+1);
  }

  const handleDecrement = () =>{
    setCount((count)=>count-1);
  }


  return (
    <>
      <h1>
        Counter Display
      </h1>
      <div>
        Count: {count}
      </div>
      <br/>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
