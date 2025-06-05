import styled, { css } from 'styled-components';
import TodoCreate from '../../components/styled/todo/TodoCreate';
import TodoList from '../../components/styled/todo/TodoList';

const Wrap = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  margin: 0 auto;
`;

const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.typography.title1};
    text-align: center;
  `}
`;

const StyledTodoPage = () => {
  return (
    <Wrap>
      <Title>TODO LIST</Title>
      <TodoCreate />
      <TodoList />
    </Wrap>
  );
};

export default StyledTodoPage;
