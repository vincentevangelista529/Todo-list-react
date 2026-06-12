function TodoItem({ todo, index, onDelete, onToggle }) {
  return (
   <li 
  onClick={() => onToggle(index)}
  className={todo.done ? 'done' : ''}
>
  {todo.text}
  <button onClick={(e) => {
    e.stopPropagation()
    onDelete(index)
  }}>Delete</button>
</li>
  )
}

export default TodoItem