import { useState } from 'react'

function TodoAdd({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if (text !== '') {
      onAdd(text)    
      setText('')   
    }
  }

  return (
    <div>
      <input
        className="todos-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo here..."
      />
      <button className="todos-btn" onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default TodoAdd