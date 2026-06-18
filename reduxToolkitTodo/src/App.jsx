import { useState } from 'react'
import AddTodo from './component/addTodo'
import UpdateTodo from './component/UpdateTodo'
import Todo from './component/todo'
import './app.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className=" mb-8 bg-gray-800 py-6 px-4">
      <h1 className="text-4xl font-extrabold text-white flex flex-col gap-2">
        Todo Manager
      </h1>
      <h1 className="text-gray-400 mt-2 font-extrabold" >
        Built with React, Redux Toolkit, and Tailwind CSS.
      </h1>
    </header>
    <AddTodo />
    <Todo />
    </>
  )
}

export default App
