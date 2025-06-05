import axios from 'axios';
import type { PokemonInfiniteQueryType } from '../types/pokemonType';

const API_URL = 'http://localhost:4000/pokemons';

/* Pokemon 목록 가져오기 */
export const fetchPokemonsAPI = async ({ pageParam = 1 }): Promise<PokemonInfiniteQueryType> => {
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
