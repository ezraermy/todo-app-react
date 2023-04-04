import InputTodo from '@/components/InputTodo';
import TodoList from '@/components/TodosList';
import { v4 as uuidv4 } from "uuid";

import { useState, useEffect } from 'react';

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const saveTodos = JSON.parse(temp)
    return saveTodos || [];
  }

  useEffect (() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos', temp)
  }, [todos])


  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }

    setTodos([...todos, newTodo])
  }

  const setUpdate = (updateTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id){
          todo.title = updateTitle;
        }
        return todo;
  })
    )
  }

  const handleChange = (id) => {
    setTodos((prevState) => 
    prevState.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    }))
  }

  const delTodo = (id) => {
    console.log('Deleted', id)
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      })
    ])
  }
  return (
   <div>
    <InputTodo addTodoItem={addTodoItem} />
    <TodoList todosProps={todos} setUpdate={setUpdate} handleChange={handleChange} delTodo={delTodo} />
   </div>
  )
}

export default TodosLogic