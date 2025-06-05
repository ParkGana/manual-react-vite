import TodoCreate from '../../../components/styled/todo/TodoCreate';
import TodoList from '../../../components/styled/todo/TodoList';

const StyledTodoPage = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-8 p-10 m-auto">
      <h1 className="text-title1 text-center">TODO LIST</h1>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default StyledTodoPage;
