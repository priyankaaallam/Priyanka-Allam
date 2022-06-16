import React from 'react'

function EventType() {
    const shoot=(a,b)=>{
        alert(b.type);
    }
  return (
    <div>
        <button onClick={(event)=>shoot("goal",event)}>click </button>
        
          </div>
  );
}
export default EventType