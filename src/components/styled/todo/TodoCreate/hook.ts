import { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { useTodo } from '../../../../hooks/tanstack/useTodo';

export const useTodoCreate = () => {
  const { createTodoMutation } = useTodo();

  const [title, setTitle] = useState('');

  /* 입력 값 변경 */
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  /* Todo 생성 */
  const handleCreateTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      createTodoMutation.mutate(title);
      setTitle('');
    }
  };

  return {
    title,
    handleChangeValue,
    handleCreateTodo
  };
};
