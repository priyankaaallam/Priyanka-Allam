import React, { useState } from 'react'

 function Myform() {
     const [mycar,setMycar] = useState("Volvo");
     const handleChange= (event) => {
         setMycar(event.target.value)
     }
  return (
    <div>
        <form >
            <select value= {mycar} onChange= {handleChange} >
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                 <option value="Audi">Audi</option>  
            </select>
        </form>

    </div>
  )
}
export default Myform
