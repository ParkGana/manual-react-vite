import { useTodo } from '../../../../hooks/tanstack/useTodo';
import TodoItem from '../TodoItem';
import { useTodoList } from './hook';
import { Container, Message } from './style';

const TodoList = () => {
  const {
    fetchTodosQuery: { data: todos, isPending, isError }
  } = useTodo();

  const { updatedItem, handleChangeUpdatedItem } = useTodoList();

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
