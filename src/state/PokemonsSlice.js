import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listOfPokemons:[
        {
            id:'',
            name: '',
            hp: '',
            attack: '',
            defense: '',
            img: '',
            types: []
        }
    ]
}

const pokemonSlice = createSlice(
    {
        name: 'pokemon',
        initialState,
        reducers:{
            getPokemons(state, action){
                const pokemons = [...action.payload]
                const newStateListOfPokemons = pokemons.map(pokemon => {
                    return {
                        id: pokemon.id,
                        name: pokemon.name,
                        hp: pokemon.stats[0].base_stat,
                        attack: pokemon.stats[1].base_stat,
                        defense: pokemon.stats[2].base_stat,
                        img: pokemon.sprites.front_default,
                        types: pokemon.types
                    }
                })
                const newState = {...state, listOfPokemons: newStateListOfPokemons}
                return newState
            }
        }
    }
)

export default pokemonSlice.reducer

export const{
getPokemons
} = pokemonSlice.actions