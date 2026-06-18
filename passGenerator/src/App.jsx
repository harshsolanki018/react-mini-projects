import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passRef = useRef(null)
  const passGen = useCallback(() => {
        let pass =""
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed){
          str += "1234567890"
        }
        if (charAllowed){
          str += "!@#$%^&*()_+{}=-?/<>;"
        }

        for (let i = 1; i <= length; i++) {
          let char = Math.floor(Math.random()*str.length )      
          pass += str.charAt(char)  
        }

      setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])

    const copyToClipboard = useCallback(()=>{
        passRef.current?.select()
        passRef.current?.setSelectionRange(0, 30)
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
      passGen()

    },[length,numberAllowed,charAllowed,passGen])
  return (
   <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password}
          placeholder='Password'
          className="outline-none w-full py-1 px-3 bg-white"
          readOnly
          ref={passRef}
        />

        <button 
          onClick={copyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            
             />
             <label htmlFor='rangeInput'>Length: {length}</label>
        </div>
        <div className='flex text-sm gap-x-2'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberAllowed'
            onChange={()=>{
              setNumberAllowed((prev)=>(!prev))
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex text-sm gap-x-2'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='charAllowed'
            onChange={()=>{
              setCharAllowed((prev)=>(!prev))
            }}
            />
            <label htmlFor='charInput'>Special Chars</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
