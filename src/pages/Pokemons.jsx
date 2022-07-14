import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../state/PokemonsSlice";

function Pokemons() {
  const { listOfPokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    pickPokemons()
  }, []);

  const pickPokemons = async () => {
    let lowerLimit = Math.floor(Math.random() * 150 + 1);
    let pokemonList = []
    for (let i = lowerLimit; i < lowerLimit + 50; i++) {
      let pokemon = await fetchPokemons(i)
      pokemonList.push(pokemon)
    }
    console.log(pokemonList);
    dispatch(getPokemons(pokemonList))
  };

  const fetchPokemons = async (id) => {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let pokemon = data.json()
    return pokemon
  }

  return (
    <div>
      {listOfPokemons.map((pokemon) => {
        return <div key={pokemon.name}>
          {pokemon.name}
          <img src={pokemon.img} alt="" />
          </div>;
      })}
    </div>
  );
}

export default Pokemons;
