import React from 'react'
import { Button } from 'react-bootstrap'

function Child1({n:count,setName}) {
  
  return (
    <div className='bg-success'> Child1
    <Button onClick={()=>{
      
      setName(count+1)}}>Set Name</Button>
    </div>
  )
}

export default Child1