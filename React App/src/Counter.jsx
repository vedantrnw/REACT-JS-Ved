import React, { useState } from 'react'

function Counter() {

    const [counter,setCounter] = useState(0);

    const decriment = () => {
        setCounter(counter - 1)
    }
   

  return (
    <>
    <h1>Counter : {counter}</h1>
    <button onClick={ () => setCounter(counter + 1)}>increment</button>
    <button onClick={decriment}>decrement</button>
    </>
  )
}

export default Counter;