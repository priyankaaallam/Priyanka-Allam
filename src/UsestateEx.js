import React, { useState } from 'react'

function Car() {
    const [car,setCar] = useState({
        brand:"ford",
        color:"red",
        year:"1990"
    });
  return (
    <div>
      <h1> My {car.brand}</h1>
      <p>It is {car.color} color from {car.year}</p>
    </div>
  )
}
export default Car