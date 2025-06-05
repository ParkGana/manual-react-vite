import { FaTrashCan } from 'react-icons/fa6';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';
import type { TodoType } from '../../../types/todoType';
import { useTodo } from '../../../hooks/tanstack/useTodo';
import { useState, type ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{ $isLast: boolean }>`
  ${({ theme, $isLast }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    ${!$isLast && ` border-bottom: 1px solid ${theme.color.gray300}`};
  `}
`;

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

const Text = styled.p<{ $isCompleted: boolean }>`
  ${({ theme, $isCompleted }) => css`
    ${theme.typography.body2};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 2px solid transparent;
    padding: 12px;
    cursor: pointer;
    ${$isCompleted && `color: ${theme.color.gray500}; text-decoration: line-through;`};
  `}
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 12px;
`;

type TodoItemProps = {
  data: TodoType;
  isLast: boolean;
  isUpdated: boolean;
  handleChangeUpdatedItem: (id: string | null) => void;
};

const TodoItem = ({ data, isLast, isUpdated, handleChangeUpdatedItem }: TodoItemProps) => {
  const { updateTodoMutation, deleteTodoMutation } = useTodo();

  const [updatedTitle, setUpdatedTitle] = useState<string>(data.title);

  /* 입력 값 변경 */
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(e.target.value);
  };

  /* 수정할 할 일 변경 */
  const handleChangeItem = () => {
    setUpdatedTitle(data.title);
    handleChangeUpdatedItem(data.id);
  };

  /* Todo 수정 */
  const handleUpdateTodo = (updatedData: TodoType) => {
    updateTodoMutation.mutate(updatedData);
    data.title !== updatedData.title && handleChangeUpdatedItem(null);
  };

  /* Todo 삭제 */
  const handleDeleteTodo = () => {
    deleteTodoMutation.mutate(data.id);
  };

  return (
    <Container $isLast={isLast}>
      {isUpdated ? (
        <>
          <Input type="text" value={updatedTitle} onChange={handleChangeValue} />
          <IconContainer>
            <FaCheck size={20} onClick={() => handleUpdateTodo({ ...data, title: updatedTitle })} />
          </IconContainer>
        </>
      ) : (
        <>
          <Text $isCompleted={data.completed} onClick={() => handleUpdateTodo({ ...data, completed: !data.completed })}>
            {data.title}
          </Text>
          <IconContainer>
            <FaPenToSquare size={20} onClick={handleChangeItem} />
            <FaTrashCan size={20} onClick={handleDeleteTodo} />
          </IconContainer>
        </>
      )}
    </Container>
  );
};

export default TodoItem;
