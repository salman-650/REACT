import React from 'react'

function Item() {
    const fruitsItems = ['Apple', 'Banana', 'jackfruit'];
  return (
    <div>
      <ul>
        {fruitsItems.map((itm, index) => (
            <li key={index}>
                {itm}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Item
