import React from 'react'

function RealWorld() {
    const products = [
        {id:'p1',name: 't-shirts'},
        {id: 'p2',name: 'jeans'}
    ]
  return (
    <div>
      <ul>
        {products.map(prdt => (
            <li key={prdt.id}>{prdt.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RealWorld
