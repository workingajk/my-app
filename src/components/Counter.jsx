import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Counter() {
    const [count,setCount]=useState(0)
    const [inc,setInc]=useState(0)
    
  return (
    <div>Counter
        <h1>{count}</h1>
        
        <Button onClick={()=>setCount(count+1)}>Increment</Button>
        <Button onClick={()=>setCount(count-1)}>Decrement</Button>
        <Button onClick={()=>setCount(0)}>Reset</Button>
        <br />
        <input id='val' type="number" />
        <Button onClick={()=>setCount(count+Number(val.value))}>Increment</Button>
        <br />
        <input  onChange={e=>setInc(Number(e.target.value))} type="number" />
        <Button onClick={()=>setCount(count+inc)}>Increment</Button>
        <br />
        

    </div>
  )
}

export default Counter