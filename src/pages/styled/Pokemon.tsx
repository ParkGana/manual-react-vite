import styled, { css } from 'styled-components';
import PokemonList from '../../components/styled/pokemon/PokemonList';

const Wrap = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  margin: 0 auto;
`;

const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.typography.title1};
    text-align: center;
  `}
`;

const StyledPokemonPage = () => {
  return (
    <Wrap>
      <Title>POKEMON LIST</Title>
      <PokemonList />
    </Wrap>
  );
};

export default StyledPokemonPage;
