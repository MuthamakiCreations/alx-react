import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>School dashboard</p>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <hr />
      <footer className="App-footer">
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
