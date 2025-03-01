'use client';

import { Pokemon } from '@/types/pokemon';
import Link from 'next/link';
import { useState } from 'react';

interface SearchBarProps {
    pokemonList: Pokemon[];
}

export default function SearchBar({ pokemonList }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPokemon = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Search Pokemon..."
                className="w-full p-2 mb-6 border border-gray-300 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPokemon.map((pokemon) => (
                    <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                            <h2 className="text-xl font-semibold capitalize text-center">
                                {pokemon.name}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}