import React, {useEffect, useState} from 'react';
import './App.css';
import List from './component/List';

function App() {
  const [appState, setAppState] = useState("");

  useEffect(() => {
    const url= 'https://api.github.com/users/AlbertVC/repos';
    fetch(url)
      .then((res) => res.json())
      .then((repos) =>{
        setAppState({repos:repos});
      });
  }, [setAppState]);

  if(!appState.repos || appState.repos.length === 0) return <p>no repositories found</p>
  return (
    <div className="App">
      <div className="container">
        <h1>
          My list of repositories
        </h1>
      </div>
      <div className="repo-container">        
       <List repos={appState.repos}/>;
      </div>
    </div>
  );
}

export default App;
