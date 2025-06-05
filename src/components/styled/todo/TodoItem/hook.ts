import { useState, type ChangeEvent } from 'react';
import type { TodoType } from '../../../../types/todoType';
import { deleteTodoAPI, updateTodoAPI } from '../../../../api/Todo';

type UseTodoItemProps = {
  data: TodoType;
  handleChangeUpdatedItem: (id: string | null) => void;
};

export const useTodoItem = ({ data, handleChangeUpdatedItem }: UseTodoItemProps) => {
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
  const handleUpdateTodo = async (updatedData: TodoType) => {
    await updateTodoAPI(updatedData);
    data.title !== updatedData.title && handleChangeUpdatedItem(null);
  };

  /* Todo 삭제 */
  const handleDeleteTodo = async () => {
    await deleteTodoAPI(data.id);
  };

  return {
    updatedTitle,
    handleChangeValue,
    handleChangeItem,
    handleUpdateTodo,
    handleDeleteTodo
  };
};
