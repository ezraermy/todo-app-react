import TodoItem from '@/components/TodoItem';

const TodosList = ({todosProps, handleChange, delTodo, setUpdate}) => {
 return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} 
          itemProp={todo} 
          handleChange={handleChange} 
          setUpdate={setUpdate}
          delTodo={delTodo}
        />
      ))}
    </ul>
 )
}

export default TodosList;