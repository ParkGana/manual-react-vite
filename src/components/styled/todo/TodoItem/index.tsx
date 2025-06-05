import { FaTrashCan } from 'react-icons/fa6';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';
import type { TodoType } from '../../../../types/todoType';
import { useTodoItem } from './hook';
import { Container, IconContainer, Input, Text } from './style';

type TodoItemProps = {
  data: TodoType;
  isLast: boolean;
  isUpdated: boolean;
  handleChangeUpdatedItem: (id: string | null) => void;
};

const TodoItem = ({ data, isLast, isUpdated, handleChangeUpdatedItem }: TodoItemProps) => {
  const { updatedTitle, handleChangeValue, handleChangeItem, handleUpdateTodo, handleDeleteTodo } = useTodoItem({
    data,
    handleChangeUpdatedItem
  });

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
