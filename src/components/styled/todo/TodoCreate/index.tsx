import { useTodoCreate } from './hook';
import { Input } from './style';

const TodoCreate = () => {
  const { title, handleChangeValue, handleCreateTodo } = useTodoCreate();

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
