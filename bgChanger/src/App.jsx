import { useState } from "react"

function App() {
  const [color, setColor] = useState("gray")

  return (
    <div className="w-full h-screen" 
    style={{ backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-5 px-2 py-3 bg-white rounded-xl">
          <button className="outline-none px-4 py-1 rounded-full bg-gray-600 text-white" onClick={()=>setColor("gray")}>Gray</button>
          <button className="outline-none px-4 py-1 rounded-full bg-red-600 text-white" onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full bg-blue-600 text-white" onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full bg-green-600 text-white" onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full bg-orange-600 text-white" onClick={()=>setColor("orange")}>Orange</button>
          <button className="outline-none px-4 py-1 rounded-full bg-black text-white" onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
