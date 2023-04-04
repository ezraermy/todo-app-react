import styles from '@/styles/TodoItem.module.scss';
import { useState } from 'react';

const TodoItem = ({itemProp, handleChange, delTodo, setUpdate}) => {

  const [editing, setEditing] = useState(false)

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEdit = () => {
    setEditing(true)
  }

  const handleUpdateDone = (event) => {
    if(event.key === 'Enter'){
      setEditing(false)
    }
  }

  let viewMode = {};
  let editMode = {};

  if(editing){
    viewMode.display = 'none';
  }else {
    editMode.display = 'none';
  }


  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
      <input type="checkbox" 
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
        {itemProp.title}
        </span>
      </div>
      <input type="text"
      style={editMode}
      value={itemProp.title}
      className={styles.textInput} 
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdateDone}
      />
    </li>
  )
}

export default TodoItem;

