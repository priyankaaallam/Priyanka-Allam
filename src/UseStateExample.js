import React, { useState } from 'react'

  function FavoriteColor() {
      const [color,setColor]=useState("red");
  return (
    <div>
        <h1>My fav color is {color} !</h1>
        <button type="button" onClick={() =>setColor("blue")}>Blue</button>
        <button type="button" onClick={() =>setColor("black")}>Black</button>
        <button type="button" onClick={() =>setColor("red")}>Red</button>
        <button type="button" onClick={() =>setColor("Green")}>Green</button>
              
    </div>
  );
}
export default FavoriteColor