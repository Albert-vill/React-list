import React from 'react';
import './App.css';
import Search from './component/Search';

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>
          Character information
        </h1>
      </div>
      <div className="repo-container">        
       <Search/>;
      </div>
    </div>
  );
}

export default App;
