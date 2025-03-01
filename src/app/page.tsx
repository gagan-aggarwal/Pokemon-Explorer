import SearchBar from '@/components/SearchBar';
import { Pokemon } from '@/types/pokemon';
import { getAllPokemon } from '@/utils/pokeapi';
import Link from 'next/link';

export default async function Home() {
  const pokemonList: Pokemon[] = await getAllPokemon();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Pokemon Explorer</h1>
      <SearchBar pokemonList={pokemonList} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon) => (
          <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold capitalize text-center">
                {pokemon.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}