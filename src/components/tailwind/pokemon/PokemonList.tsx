import React, { useEffect, useRef } from 'react';
import { usePokemon } from '../../../hooks/tanstack/usePokemon';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const observerRef = useRef(null);

  const {
    fetchPokemonsQuery: { data, fetchNextPage, hasNextPage, isPending, isError }
  } = usePokemon();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4">
      {data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.data.map((pokemon) => (
            <PokemonCard key={pokemon.id} data={pokemon} />
          ))}
        </React.Fragment>
      ))}
      <div ref={observerRef} />
    </div>
  );
};

export default PokemonList;
