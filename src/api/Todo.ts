import axios from 'axios';
import type { TodoType } from '../types/todoType';

const API_URL = 'http://localhost:4000/todos';

/* Todo 목록 가져오기 */
export const fetchTodosAPI = async (): Promise<TodoType[]> => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

/* Todo 생성 */
export const createTodoAPI = async (title: string) => {
  try {
    await axios.post(API_URL, { title, completed: false });
  } catch (e: any) {
    throw new Error(e);
  }
};

/* Todo 수정 */
export const updateTodoAPI = async ({ id, title, completed }: TodoType) => {
  try {
    await axios.patch(`${API_URL}/${id}`, { title, completed });
  } catch (e: any) {
    throw new Error(e);
  }
};

/* Todo 삭제 */
export const deleteTodoAPI = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (e: any) {
    throw new Error(e);
  }
};
