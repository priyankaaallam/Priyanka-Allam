import { useState, useRef, useEffect } from 'react';

function Example2() {
    const [inputValue, setInputvalue]= useState("");
    const previousInputValue= useRef(" ");
    useEffect(() => {
        previousInputValue.current= inputValue;
    },[inputValue]);
  return (
    <div>
      <input type="text"
       value = {inputValue}
       onChange={(e) => setInputvalue(e.target.value)} />
      <h2>currentInputvalue : {inputValue}</h2>
      <h2> previousInputvalue : {previousInputValue.current}</h2>
    </div>
  )
}

export default Example2

