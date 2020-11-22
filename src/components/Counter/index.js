import React from 'react'
import { observer, inject } from 'mobx-react';

const Counter = ({ counter }) => {
  const { number, increase, decrease } = counter
  return (
    <div>
      <h1>{number}</h1>
      <h2>{counter.double}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  )
}

export default inject('counter')(observer(Counter))