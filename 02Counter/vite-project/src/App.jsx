import { useState } from 'react'

function App() {
  let count =15
 const[countValue, setCountValue] = useState(count)

 function handleAddValue() {
  if(countValue < 20)
  setCountValue(countValue + 1)
 }

 function handleSubtractValue() {
  if(countValue > 0)
  setCountValue(countValue - 1)
 }
  return (
    <div>
      <h1>Hello Vite!</h1>
      <p>Start editing to see some magic happen :</p>
      <h2>Count: {countValue}</h2>
      <button onClick={handleAddValue}>Add value</button>
      <button onClick={handleSubtractValue}>Subtract value</button>
    </div>
  )
}

export default App
