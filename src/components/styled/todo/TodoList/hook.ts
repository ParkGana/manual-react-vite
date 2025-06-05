import { useEffect, useState } from 'react';
import type { TodoType } from '../../../../types/todoType';
import { fetchTodosAPI } from '../../../../api/Todo';

export const useTodoList = () => {
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

  return {
    todos,
    updatedItem,
    handleChangeUpdatedItem
  };
};
