import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../features/todo/todoSlice'
import { useState, useEffect } from 'react'

function UpdateTodo({id, text, onClose}) {
    const dispatch = useDispatch()
    const [newText, setNewText] = useState('')

    useEffect(() => {
      setNewText(text)
    }, [text])
    
    const handleUpdate = () =>{
        if (!newText.trim()) return

        dispatch(updateTodo({ id , text: newText }))
        setNewText('')
        onClose()
    }
    return (
    <div className="bg-gray-800 p-6 rounded-2xl w-96 border border-gray-600">
      <h2 className="text-white text-2xl font-bold mb-4">
        Update Todo
      </h2>

      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white"
      />

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-600 rounded-lg text-white"
        >
          Cancel
        </button>

        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white"
          
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default UpdateTodo
