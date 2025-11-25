import React, { useState } from 'react'

const State = () => {
   //state initializing using useState hook//
    const [time, settime] = useState(0);

    //function to increment the timer//
    const incrementTime =() => {
        settime(time +1);

    }
  return (
    <div>
      <h1>Time: {time}seconds</h1>
      <button onClick={incrementTime}>Increment Time</button>
    </div>
  )
}

export default State
