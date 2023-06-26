import React, { useState } from 'react'
import { Users } from './Users'
import "./app.css"

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input type="text" placeholder='Search...' className='search' onChange={(e) => setInput(e.target.value)} value={input}/>
      <ul className='list'>
        {Users.filter((data) => data.first_name.toLowerCase().includes(input)).map((data) => <li className='listItem'>{data.first_name}</li>)}
      </ul>
    </div>
  )
}

export default App