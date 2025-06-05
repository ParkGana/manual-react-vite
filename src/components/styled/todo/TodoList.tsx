import { useState } from 'react';
import { useTodo } from '../../../hooks/tanstack/useTodo';
import TodoItem from './TodoItem';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Message = styled.p`
  ${({ theme }) => css`
    ${theme.typography.body2};
    color: ${theme.color.gray500};
    text-align: center;
  `}
`;

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
    <Container>
      {!todos.length && <Message>등록된 할 일이 없습니다.</Message>}
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          data={todo}
          isLast={index === todos.length - 1}
          isUpdated={todo.id === updatedItem}
          handleChangeUpdatedItem={handleChangeUpdatedItem}
        />
      ))}
    </Container>
  );
};

export default TodoList;
