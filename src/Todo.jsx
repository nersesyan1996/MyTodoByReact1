import React from "react";
import TodoItem from "./TodoItem";

const Todo = (todo) => {
  return (
    <div>
      {todo.todo.map((i) => (
        <TodoItem key={i.id} {...i} />
      ))}
    </div>
  );
};

export default Todo;
