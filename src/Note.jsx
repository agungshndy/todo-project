/* eslint-disable react/prop-types */
// import React from "react";
import TodoItem from "./TodoItem";


function Note({ todos, toggleTodo, deleteTodo }) {
    return (
      <>
        <h1 className="flex items-center justify-center m-5 text-3xl">Todo List</h1>

      <div className="flex items-center justify-center">
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
      </div>
      </>
    )
  }

export default Note;