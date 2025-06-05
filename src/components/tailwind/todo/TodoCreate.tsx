import clsx from 'clsx';
import { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { useTodo } from '../../../hooks/tanstack/useTodo';

const TodoCreate = () => {
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

  return (
    <input
      type="text"
      className={clsx('w-full text-body2 border-2 border-gray-300 p-3', 'focus:border-gray-900 focus:outline-none')}
      value={title}
      placeholder="할 일을 입력해주세요."
      onChange={handleChangeValue}
      onKeyDown={handleCreateTodo}
    />
  );
};

export default TodoCreate;
