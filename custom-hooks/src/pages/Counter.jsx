import React from 'react'
import useCounter from '../customhooks/Counterhook.js'

const Counter = () => {
  const {count,increment,decrement} = useCounter(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>{" "}
      <button disabled={count===0} onClick={decrement}>-</button>
    </div>
  )
}

export default Counter