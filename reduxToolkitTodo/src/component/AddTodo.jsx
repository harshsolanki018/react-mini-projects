import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch( addTodo(input) )
        setInput('')
    }

    return (
<>
  <form
    onSubmit={addTodoHandler}
    className="bg-gray-900 border border-gray-600 rounded-2xl p-4 shadow-lg mb-6"
  >
    <div className="flex items-center gap-3">
      <input
        type="text"
        className="flex-1 bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-200 active:scale-95"
      >
        Add
      </button>
    </div>
  </form>
</>
    )
}

export default AddTodo
