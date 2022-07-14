import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Favorites from './pages/Favorites';
import Pokemons from './pages/Pokemons';

function App() {  

  return (
    <Router>
      <nav>
        <div>
          <img src="../src/assets/pokeBall.png" alt="poke ball" className='poke-image'/>
        </div>
        <div>
          <ul>
            <li><Link to='/pokemons'>Pokemon list</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
          </ul>
        </div>
        <div className='nav-right-side'>
          <div>
            Por: Santiago Gómez
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </Router>
  )
}

export default App
