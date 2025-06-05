import { FaTrashCan } from 'react-icons/fa6';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';
import type { TodoType } from '../../../types/todoType';
import clsx from 'clsx';
import { useState } from 'react';
import { useTodo } from '../../../hooks/tanstack/useTodo';

type TodoItemProps = {
  data: TodoType;
  isLast: boolean;
  isUpdated: boolean;
  handleChangeUpdatedItem: (id: string | null) => void;
};

const TodoItem = ({ data, isLast, isUpdated, handleChangeUpdatedItem }: TodoItemProps) => {
  const { updateTodoMutation, deleteTodoMutation } = useTodo();

  const [updatedTitle, setUpdatedTitle] = useState<string>(data.title);

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
    <div className={clsx('flex justify-between items-center py-3', !isLast && 'border-b border-gray-300')}>
      {isUpdated ? (
        <>
          <input
            type="text"
            className={clsx(
              'w-full text-body2 border-2 border-gray-300 p-3',
              'focus:border-gray-900 focus:outline-none'
            )}
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <FaCheck size={20} className="m-3" onClick={() => handleUpdateTodo({ ...data, title: updatedTitle })} />
        </>
      ) : (
        <>
          <p
            className={clsx(
              'text-body2 truncate border-2 border-transparent p-3 cursor-pointer',
              data.completed && 'text-gray-500 line-through'
            )}
            onClick={() => handleUpdateTodo({ ...data, completed: !data.completed })}
          >
            {data.title}
          </p>
          <div className="flex items-center gap-3 m-3">
            <FaPenToSquare size={20} onClick={handleChangeItem} />
            <FaTrashCan size={20} onClick={handleDeleteTodo} />
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
