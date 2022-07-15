import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites";
import LogIn from "./pages/LogIn";
import PokemonDetail from "./pages/PokemonDetail";
import Pokemons from "./pages/Pokemons";
import { logOut } from "./state/LogInSlice";

function App() {
  const { user } = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());
  };

  return (
    <Router>
      <nav>
        <div>
          <img
            src="../src/assets/pokeBall.png"
            alt="poke ball"
            className="poke-image"
          />
        </div>
        {user ? (
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/" >Pokemon list</Link>
                </li>
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-side">
              <div>Por: Santiago Gómez</div>
              <div>
                <button onClick={logOutUser}>LogOut</button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </nav>
      {user ? (
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route
            path="/pokemons/:pokemonId"
            element={<PokemonDetail />}
          ></Route>
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
