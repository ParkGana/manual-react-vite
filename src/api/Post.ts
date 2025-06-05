import axios from 'axios';
import type { PostInfiniteQueryType } from '../types/postType';

const API_URL = 'http://localhost:4000/posts';

/* Post 목록 가져오기 */
export const fetchPostsAPI = async ({ pageParam = 1 }): Promise<PostInfiniteQueryType> => {
  try {
    const res = await axios.get(`${API_URL}?_page=${pageParam}&_per_page=10`);
    return {
      data: res.data.data,
      nextPage: res.data.next
    };
  } catch (e: any) {
    throw new Error(e);
  }
};
