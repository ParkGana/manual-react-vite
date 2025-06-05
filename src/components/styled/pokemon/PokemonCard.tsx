import styled, { css } from 'styled-components';
import type { PokemonType } from '../../../types/pokemonType';

const Container = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${theme.color.gray300};
    padding: 20px;
    cursor: pointer;
  `}
`;

const Image = styled.img``;

const Name = styled.p`
  ${({ theme }) => css`
    width: 100%;
    ${theme.typography.body3};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

type PokemonCardProps = {
  data: PokemonType;
};

const PokemonCard = ({ data }: PokemonCardProps) => {
  return (
    <Container>
      <Image src={data.img_url} width={150} height={150} alt="pokemon" />
      <Name>{data.name}</Name>
    </Container>
  );
};

export default PokemonCard;
