import { configureStore} from "@reduxjs/toolkit";
import PokemonsSlice from "./PokemonsSlice";


const store = configureStore({
    reducer: {
        pokemons: PokemonsSlice
    }
})

export default store
