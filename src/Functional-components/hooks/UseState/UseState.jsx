import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0); //initial value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>Increment</button> 
      {/* <!---- state is a internal data strore that belongs to a specific componenet,and it can be chnged over time---> */}
    </div>
  )
}

export default UseState
