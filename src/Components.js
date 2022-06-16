import React from "react";
function Car(){
    return <h2> I am a car</h2>
}

function Showroom(){
    return (
        <div>
    <h1> Car showroom </h1>
          <Car/>
          </div>
    )
}
export default Showroom