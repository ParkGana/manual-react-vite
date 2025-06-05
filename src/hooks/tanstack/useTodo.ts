import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTodoAPI, deleteTodoAPI, fetchTodosAPI, updateTodoAPI } from '../../api/Todo';
import type { TodoType } from '../../types/todoType';

export const useTodo = () => {
  const queryClient = useQueryClient();

  /* Todo 목록 가져오기 */
  const fetchTodosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodosAPI
  });

  /* Todo 생성 */
  const createTodoMutation = useMutation({
    mutationFn: createTodoAPI,
    onMutate: async (title: string) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const prevTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData<TodoType[]>(['todos'], (prev = []) => [
        ...prev,
        { id: crypto.randomUUID(), title, completed: false }
      ]);

      return { prevTodos };
    },
    onError: (_err, _variables, context) => {
      context && queryClient.setQueryData(['todos'], context.prevTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  /* Todo 수정 */
  const updateTodoMutation = useMutation({
    mutationFn: updateTodoAPI,
    onMutate: async ({ id, title, completed }) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const prevTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData<TodoType[]>(['todos'], (prev = []) =>
        prev.map((todo) => (todo.id === id ? { ...todo, title, completed } : todo))
      );

      return { prevTodos };
    },
    onError: (_err, _variables, context) => {
      context && queryClient.setQueryData(['todos'], context.prevTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  /* Todo 삭제 */
  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodoAPI,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const prevTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData<TodoType[]>(['todos'], (prev = []) => prev.filter((todo) => todo.id !== id));

      return { prevTodos };
    },
    onError: (_err, _variables, context) => {
      context && queryClient.setQueryData(['todos'], context.prevTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  return { fetchTodosQuery, createTodoMutation, updateTodoMutation, deleteTodoMutation };
};
