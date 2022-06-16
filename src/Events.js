import React from 'react'

function Events() {
    function clickHandler(){
        console.log("Buttonclicked")
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Events
