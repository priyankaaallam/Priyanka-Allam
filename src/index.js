import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Todos from './Todos';

function MemoExample() {
  const [count,setCount]= useState( 0);
  const [todos,setTodos] = useState(["todo1" ,"todo2"]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const increment = () => {
   setCount((c) => c +1);
     }
     const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
    
  return (
  <div>
    <Todos todos= { todos }  addTodo= { addTodo }/>
    <button onClick = { addTodo }> Add todo </button>
    <hr/>
    <div>
        Count : { count }
        < button onClick =  { increment } > + </button>
        <h2> Expensive calculation </h2 >
        { calculation }
    </div>
  </div>  
);
};
  const expensiveCalculation = (num) => {
   for(let i=0; i<10000; i++) {
    num += 1;
   }
    return num;
}
  const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
   <MemoExample/>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
