import { useEffect , useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import Header from './Header';
import Note from './Note';

function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <Header/>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <Note todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App