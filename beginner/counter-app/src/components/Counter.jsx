import {useState} from 'react'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h1 className='heading'>Counter App</h1>
      <div className='counter-container'>
        <h2>{count}</h2>
        <div className='buttons'>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
      </div>
    </div>
  )
}
