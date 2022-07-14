import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import "./styles/pokemonDetailStyle.css";

function PokemonDetail() {
  const { pokemonId } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState({});
  const { listOfPokemons } = useSelector((state) => state.pokemons);
  const navigate = useNavigate();

  useEffect(() => {
    const pokemon = listOfPokemons.find((pokemon) => pokemon.id == pokemonId);
    setPokemonDetail(pokemon);
    console.log(pokemonDetail);
  }, []);

  return (
    <div className="detail">
      <div className="poke-card poke-card-detail">   
        <div className="poke-img-detail">
          <img src={pokemonDetail.img} alt="" />
        </div>
        <div className="pokemon-name">{pokemonDetail.name}</div>
        <div className="types">
          {pokemonDetail?.types?.map((type) => {
            return (
              <div>
                <div className="type-name">{type.type.name}</div>
              </div>
            );
          })}
        </div>
        <div className="stats">
          <div className="stat-item">
            <div>HP</div>
            <div>{pokemonDetail.hp}</div>
          </div>
          <div className="stat-item">
            <div>Attack</div>
            <div>{pokemonDetail.attack}</div>
          </div>
          <div className="stat-item">
            <div>Defense</div>
            <div>{pokemonDetail.defense}</div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/pokemons")} className='button-return'>
        &lt;&lt; Return to the pokemon list
      </button>
    </div>
  );
}

export default PokemonDetail;
