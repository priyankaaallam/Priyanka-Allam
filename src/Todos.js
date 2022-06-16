import {memo}from 'react'

const Todos = ({todos}) => {
    return (
    <div>
      <h1>My todos</h1>
      {todos.map((todo , index) => {
      return(<p key = {index}> {todo} </p>);
    })}
    </div>
  );
};

export default memo(Todos);
