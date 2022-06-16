import {useRef} from 'react'

function Example1() {
    const inputValue = useRef();
    const focusInput = () => {
        inputValue.current.focus();
    }

  return (
    <div>
      <input type = "text"
      ref = { inputValue } />
      <button onClick = { focusInput }>Focus Input</button>

    </div>
  )
}

export default Example1
 