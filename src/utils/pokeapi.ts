import { Pokemon, PokemonDetails, PokemonListResponse } from "@/types/pokemon";

export async function getAllPokemon(): Promise<Pokemon[]> {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data: PokemonListResponse = await res.json();
    return data.results;
}

export async function getPokemonDetails(name: string): Promise<PokemonDetails> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data: PokemonDetails = await res.json();
    return data;
}