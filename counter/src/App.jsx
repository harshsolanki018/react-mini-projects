import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  let message = ''

  const addValue = () =>{
    
    if (counter >= 20 ){
      alert("value cant go more then 20")
    }else{
      counter = counter + 1
      setCounter(counter)
    }
    
  }

  const removeValue = ()=>{
    if (counter <= 0 ){
     alert("value cant go nagative") 
    }else{
      counter = counter - 1
      setCounter(counter)
    }
    
  }

  return (
    <>
    <h1>Counter : {counter}</h1>

    <button onClick={addValue} >Add Value</button><br />
    <button onClick={removeValue} >Remove Value</button><br />
    
    <footer>
      <h3>footer:{counter}</h3>
    </footer>
    </>
  )
}

export default App
