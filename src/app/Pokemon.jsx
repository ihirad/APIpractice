"use client";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemonName, setPokemonName] = useState("ditto");
  const [pokemon, setPokemon] = useState({});

  async function fetchPokemon() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (response.ok) {
        const info = await response.json();
        setPokemon(info);
      } else {
        console.error("Failed to fetch Pokemon data");
      }
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  }

  function handleInputChanges(e) {
    setPokemonName(e.target.value);
  }

  useEffect(() => {
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div>
      <h2>Pokemon</h2>
      <p>
        Here's a Pokemon API:{" "}
        <a
          href={`https://pokeapi.co/api/v2/pokemon/${pokemonName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://pokeapi.co/api/v2/pokemon/{pokemonName}
        </a>
      </p>
      <p>
        You can replace the text "{pokemonName}" in the URL with the name of the
        Pokemon you want to search for.
      </p>
      <div id="pokemon-container">
        <div id="input-container">
          <input
            id="pokemon-name"
            type="text"
            value={pokemonName}
            onChange={handleInputChanges}
          />
          <button id="search-button" onClick={fetchPokemon}>
            Search
          </button>
        </div>
        <p>{pokemon.name}</p>
        <img
          src={pokemon.sprites?.front_default}
          alt={`${pokemonName} Sprite`}
        />
      </div>
      <hr />
    </div>
  );
}
