import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div style={{ padding:'20px', backgroundColor:'black', borderRadius:'8px'}}>
       <h1 style={{padding:'10px', backgroundColor:'yellow', color:'black', borderRadius:'4px'}}>{count}</h1>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}>
       <button onClick={() => setCount(count+1)}>Inc</button>
       <button onClick={() => setCount(count-1)}>Dec</button>
       </div>
    </div>
    </>
  )
}

export default App
