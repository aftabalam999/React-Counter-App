import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // let count = 5;
  const addValue = ()=>{
    // counter = counter+1;
    setCounter(counter+1)
    // console.log('added', counter);
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }


  return (
    <>
      <h1>Jasin aur react</h1>
      <h2>Couner Value : {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br/>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
