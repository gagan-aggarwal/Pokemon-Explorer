import { PokemonDetails } from "@/types/pokemon";
import { getPokemonDetails } from "@/utils/pokeapi";
type tParams = Promise<{ name: string }>;

export default async function PokemonDetail({ params }: { params: tParams }) {
    const { name }: { name: string } = await params; // fix this line

    const pokemon: PokemonDetails = await getPokemonDetails(name);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center capitalize">
                {pokemon.name}
            </h1>
            <div className="flex flex-col items-center">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-48 h-48"
                />
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Abilities</h2>
                    <ul className="list-disc pl-6">
                        {pokemon.abilities.map((ability) => (
                            <li key={ability.ability.name} className="capitalize">
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-semibold mt-4">Types</h2>
                    <ul className="list-disc pl-6">
                        {pokemon.types.map((type) => (
                            <li key={type.type.name} className="capitalize">
                                {type.type.name}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-semibold mt-4">Stats</h2>
                    <ul className="list-disc pl-6">
                        {pokemon.stats.map((stat) => (
                            <li key={stat.stat.name} className="capitalize">
                                {stat.stat.name}: {stat.base_stat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}