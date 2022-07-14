import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getPokemons } from "../state/PokemonsSlice";
import "./styles/pokemonsStyles.css";

function Pokemons() {
  const { listOfPokemons } = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    pickPokemons();
  }, []);

  const pickPokemons = async () => {
    let lowerLimit = Math.floor(Math.random() * 150 + 1);
    let pokemonList = [];
    for (let id = lowerLimit; id < lowerLimit + 50; id++) {
      let pokemon = await fetchPokemons(id);
      pokemonList.push(pokemon);
    }
    console.log(pokemonList);
    dispatch(getPokemons(pokemonList));
  };

  const fetchPokemons = async (id) => {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = data.json();
    return pokemon;
  };

  return (
    <div className="pokemon-list">
      {listOfPokemons.map((pokemon) => {
        return (
          <button key={pokemon.name} className="poke-card" onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
            <div className="poke-img">
              <img src={pokemon.img} alt="" />
            </div>
            <div className="pokemon-name">{pokemon.name}</div>
            <div className="types">
              {pokemon.types.map((type) => {
                return (
                  <div key={type.type.name}>
                    <div className="type-name">{type.type.name}</div>
                  </div>
                );
              })}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Pokemons;
