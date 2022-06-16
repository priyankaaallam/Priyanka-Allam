import React from 'react'

function Car(props) {
  return (
    <div>
      <h1>{props.brand}</h1>
    </div>
  )
}
 function Garage(){
    return(
        <div>
            <h1> Car garage</h1>
            <Car brand='Ford'/>
        </div>
    )
}
export default Garage