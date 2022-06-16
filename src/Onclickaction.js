import React from 'react'

export default function Football() {
    const shoot=()=>{
        alert("Goal");
    }
  return (
    <div>
      <button onClick={shoot}>Click Here</button>
    </div>
  )
}
/* const shoot=(a)=>{
    alert(a);
}
return (
<div>
  <button onClick={()=>shoot("Goal")}>Click Here</button>
</div>
) 
*/