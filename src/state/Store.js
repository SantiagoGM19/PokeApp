import { configureStore} from "@reduxjs/toolkit";
import LogInSlice from "./LogInSlice";
import PokemonsSlice from "./PokemonsSlice";


const store = configureStore({
    reducer: {
        pokemons: PokemonsSlice,
        loggedIn: LogInSlice
    }
})

export default store
