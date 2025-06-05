import { useEffect, useState } from 'react';
import { fetchTodosAPI } from '../../../api/Todo';
import type { TodoType } from '../../../types/todoType';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [updatedItem, setUpdatedItem] = useState<string | null>(null);

  /* Todo 목록 가져오기 */
  useEffect(() => {
    const fetchTodos = async () => {
      setTodos(await fetchTodosAPI());
    };
    fetchTodos();
  }, []);

  /* 수정할 할 일 변경 */
  const handleChangeUpdatedItem = (id: string | null) => {
    setUpdatedItem(id);
  };

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
