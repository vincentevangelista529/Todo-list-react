import { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './TodoItem'
import TodoAdd from './TodoAdd'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  
  const handleAdd = (text) => {
  setTodos([...todos, { text: text, done: false }])
}

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }
  
  const handleToggle = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done} : todo
    ))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
  <div className="container">
    <h1>My Todo App</h1>
    <TodoAdd onAdd={handleAdd} />
    <ul className="todos-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  </div>
)
}

export default App