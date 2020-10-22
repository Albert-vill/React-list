import React, {useEffect, useState} from 'react';
import './App.css';
import List from './component/List';
import Search from './component/Search';

function App() {
  const [appState, setAppState] = useState("");

  useEffect((id) => {
    const url= `https://swapi.co/api/people?search=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((repos) =>{
        setAppState({repos:repos});
      });
  }, [setAppState]);

  if(!appState.repos || appState.repos.length === 0) return <p>no person found</p>
  return (
    <div className="App">
      <div className="container">
        <h1>
          Character information
        </h1>
      </div>
      <div className="repo-container">        
       <List repos={appState.repos}/>;
      </div>
    </div>
  );
}

export default App;
