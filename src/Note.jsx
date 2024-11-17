/* eslint-disable react/prop-types */
// import React from "react";
import TodoItem from "./TodoItem";


function Note({ todos, toggleTodo, deleteTodo }) {
    return (
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
  }

export default Note;