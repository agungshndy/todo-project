/* eslint-disable react/prop-types */
import { useState } from "react"


function TodoForm({ onSubmit }){
    const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (

    <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row items-center justify-items-center">
        <label htmlFor="item" className="block text-3xl m-3">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item" 
          className="w-auto rounded-md mb-2 block"
        />
        <button className="btn btn-accent">Add</button>
      </div>
    </form>
    </>
  )
}

export default TodoForm