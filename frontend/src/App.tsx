import React from 'react';
import './App.css';
import CreateFerramenta from './components/create-Ferramenta/create-ferramenta';
import ListFerramenta from './components/list-ferramenta/list-ferramenta';

function App() {
  return (
    <div className="App">
      <CreateFerramenta />
      <ListFerramenta />
    </div>
  );
}

export default App;
