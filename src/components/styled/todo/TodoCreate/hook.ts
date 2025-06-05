import { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { createTodoAPI } from '../../../../api/Todo';

export const useTodoCreate = () => {
  const [title, setTitle] = useState('');

  /* 입력 값 변경 */
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  /* Todo 생성 */
  const handleCreateTodo = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      await createTodoAPI(title);
      setTitle('');
    }
  };

  return {
    title,
    handleChangeValue,
    handleCreateTodo
  };
};
