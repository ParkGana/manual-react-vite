import { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { useTodo } from '../../../hooks/tanstack/useTodo';
import styled, { css } from 'styled-components';

const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    ${theme.typography.body2};
    border: 2px solid ${theme.color.gray300};
    padding: 12px;

    :focus {
      border: 2px solid ${theme.color.gray900};
      outline: none;
    }
  `}
`;

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
    <Input
      type="text"
      value={title}
      placeholder="할 일을 입력해주세요."
      onChange={handleChangeValue}
      onKeyDown={handleCreateTodo}
    />
  );
};

export default TodoCreate;
