import React from 'react'

const RenderingLists = () => {

    const fruits = ["apple", "banana", "mango"];
  return (
    <div>
      {fruits.map((fruit, index) =>(
        <li key={index}>{fruit}</li>
      ))}
    </div>
  )
}

export default RenderingLists
