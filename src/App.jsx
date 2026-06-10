import { useState } from 'react'
import './App.css'
function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  
  const handleAdd = () => {
    if (text !== ''){
      setTodos([...todos, {text: text, done: false}])
      setText('')
    }
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }
  
  const handleToggle = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done} : todo
    ))
  }

  return(
    <div>
    <h1>My Todo App</h1>
    <div className="container">
    <input className="todos-input"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter a todos here..." 
    />
    <button className="todos-btn" onClick={handleAdd}>Add</button>
    <ul className="todos-list">
      {todos.map((todo, index) =>(
        <li 
        key={index}
        onClick = {() => handleToggle(index)}
        className={todo.done ? 'done' : ''}
        >
          {todo.text}
          <button onClick={(e) =>
            {e.stopPropagation() 
            handleDelete(index) 
            }}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
    </div>
  )
}

export default App