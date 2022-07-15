import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getPokemons } from "../state/PokemonsSlice";
import "./styles/pokemonsStyles.css";
import "./styles/pokemonsStylesResponsive.css"

function Pokemons() {
  const { listOfPokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonFound, setPokemonFound] = useState({});

  useEffect(() => {
    pickPokemons();
  }, [page]);

  const pickPokemons = async () => {
    // let lowerLimit = Math.floor(Math.random() * 150 + 1);
    let pokemonList = [];
    for (let id = page * 50 - 49; id < page * 50 + 1; id++) {
      let pokemon = await fetchPokemons(id);
      pokemonList.push(pokemon);
    }
    console.log(pokemonList);
    dispatch(getPokemons(pokemonList));
  };

  const pickOnePokemon = async (e) => {
    e.preventDefault();
    let pokemon = await fetchPokemons(pokemonName);
    if (pokemon) {
      setPokemonFound(pokemon);
    }
  };

  const fetchPokemons = async (item) => {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`);
    let pokemon = data.json();
    return pokemon;
  };

  const goBack = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const goForward = () => {
    if (page === 4) {
      return;
    }
    setPage(page + 1);
  };

  const onChangePokemonName = (e) => {
    setPokemonName(e.target.value);
  };

  const showPokemons = () => {
    return (
      <div className="pokemon-list">
        {listOfPokemons.map((pokemon) => {
          return (
            <button
              key={pokemon.name}
              className="poke-card"
              onClick={() => navigate(`/pokemons/${pokemon.id}`)}
            >
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
  };

  return (
    <div className="body-pokemons">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Find your favorite pokemon"
          onChange={onChangePokemonName}
        />
        <div className="search-icon">
          <button className="button-search" onClick={pickOnePokemon}>
            <img
              src="../../src/assets/search-interface-symbol.png"
              alt=""
              className="search-img"
            />
          </button>
        </div>
      </div>
      {pokemonName === "" ? (
        showPokemons()
      ) : JSON.stringify(pokemonFound) !== "{}" ? (
        <div>
          <button
            key={pokemonFound?.name}
            className="poke-card"
            onClick={() => navigate(`/pokemons/${pokemonFound?.id}`)}
          >
            <div className="poke-img">
              <img src={pokemonFound?.sprites?.front_default} alt="" />
            </div>
            <div className="pokemon-name">{pokemonFound?.name}</div>
            <div className="types">
              {pokemonFound?.types?.map((type) => {
                return (
                  <div key={type.type.name}>
                    <div className="type-name">{type.type.name}</div>
                  </div>
                );
              })}
            </div>
          </button>
        </div>
      ) : (
        showPokemons()
      )}
      <div className="container-change-page">
        <button className="button-change-page" onClick={goBack}>
          &lt;
        </button>
        {page}
        <button className="button-change-page" onClick={goForward}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pokemons;
