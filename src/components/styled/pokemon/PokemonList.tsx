import React, { useEffect, useRef } from 'react';
import { usePokemon } from '../../../hooks/tanstack/usePokemon';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

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
    <Container>
      {data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.data.map((pokemon) => (
            <PokemonCard key={pokemon.id} data={pokemon} />
          ))}
        </React.Fragment>
      ))}
      <div ref={observerRef} />
    </Container>
  );
};

export default PokemonList;
