import type { PokemonType } from '../../../types/pokemonType';

type PokemonCardProps = {
  data: PokemonType;
};

const PokemonCard = ({ data }: PokemonCardProps) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 p-5 cursor-pointer">
      <img src={data.img_url} width={150} height={150} alt="pokemon" />
      <p className="w-full truncate text-body3 text-center">{data.name}</p>
    </div>
  );
};

export default PokemonCard;
