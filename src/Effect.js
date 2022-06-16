import {useState, useEffect} from 'react'

function Effect() {
    const[count,setCount] = useState(0);
    useEffect(()=>{
      setTimeout(()=>{
        setCount((count)=>count +1);
      },1000);
    },[]);
    return (
      <h1> the count is {count}</h1>
    )
}
export default Effect