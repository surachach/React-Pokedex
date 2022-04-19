import './App.css';
import AppHeader from './components/AppHeader';
import ImageSlider from './components/ImageSlider';
import ImageItem from './components/ImageItem';
import pokemons from './data/pokemons';
import { useState } from 'react';
import ImagePost from './components/ImagePost';
import AppSearch from './components/AppSearch';
import NavBar from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const[selectedPokemon, setSelectedPokemon] = useState(null);
  const[searchText, setSearchText] = useState(''); 

  function onPokemonOpenClick(thePokemon) {
    setSelectedPokemon(thePokemon);
  }

  function onPokemonCloseClick() {
    setSelectedPokemon(null);
  }
  
  
  const pokemonElements = pokemons.filter((pokemont) => {
    return pokemont.title.includes(searchText);
  }).map((pokemont, index) => {
    return < ImageItem key={index} pokemont={pokemont} onPokemonClick={onPokemonOpenClick} />;
  });

  let imagePost = null; 
  if (!!selectedPokemon ) {
      imagePost = <ImagePost pokemon={selectedPokemon} onBgClick={onPokemonCloseClick} />
  }
  return (
    <div className="app">
      {/* <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> */}
      <AppHeader/>
      
         <ImageSlider/>
              <AppSearch value={searchText} onValueChange={setSearchText} />
              <div className='app-grid'>
                   {pokemonElements}
              </div>
        
      {imagePost}
    
    </div>
  );
}

export default App;
