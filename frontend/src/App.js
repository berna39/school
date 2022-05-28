import { useState } from "react";
import Calc from "./pages/Calc";

const App = () => {
  const [count, setCount] = useState(10);


  return (
    <div>
      <p>Count {count}</p>
      <h1>Test</h1>
      {
        [1,2,3].map((key)=> <Calc name={key} />)
      }

      <button onClick={()=> setCount(count + 1)} >ADD</button>
      
    </div>
  )
}

export default App;