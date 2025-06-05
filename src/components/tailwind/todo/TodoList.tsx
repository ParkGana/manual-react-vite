import { useState } from 'react';
import TodoItem from './TodoItem';
import { useTodo } from '../../../hooks/tanstack/useTodo';

const TodoList = () => {
  const {
    fetchTodosQuery: { data: todos, isPending, isError }
  } = useTodo();

  const [updatedItem, setUpdatedItem] = useState<string | null>(null);

  /* 수정할 할 일 변경 */
  const handleChangeUpdatedItem = (id: string | null) => {
    setUpdatedItem(id);
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="w-full flex flex-col">
      {!todos.length && <p className="text-body2 text-gray-500 text-center">등록된 할 일이 없습니다.</p>}
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          data={todo}
          isLast={index === todos.length - 1}
          isUpdated={todo.id === updatedItem}
          handleChangeUpdatedItem={handleChangeUpdatedItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
