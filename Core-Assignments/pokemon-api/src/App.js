import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const base_url = "https://pokeapi.co/api/v2/";
  const [pokemon, setPokemon] = useState([]);

  // Using Axios
  useEffect(() => {
    axios.get(base_url + "pokemon?limit=807")
      .then(response => {setPokemon(response.data.results)})
      // the "data" above is from axios, the "results" is from this specific API
      .catch(error => console.log(error))
    }, [])
  
  // Below code is using "fetch"
  // useEffect(() => {
  //   fetch(base_url + "pokemon?limit=807")
  //     .then(response => response.json())
  //     .then(json => setPokemon(json.results))
  //     .catch(error => console.log(error));
  // }, [])

  return (
    <div className="App">
        { pokemon.map((poke, index) => {
            return (<p key={index}>{poke.name}</p>)
          })
        }
    </div>
  );
}

export default App;
