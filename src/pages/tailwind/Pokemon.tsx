import PokemonList from '../../components/tailwind/pokemon/PokemonList';

const TailwindPokemonPage = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-8 p-10 m-auto">
      <h1 className="text-title1 text-center">POKEMON LIST</h1>
      <PokemonList />
    </div>
  );
};

export default TailwindPokemonPage;
