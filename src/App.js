import React from 'react';
import './App.css';
import { RedditData } from './redditdata';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reddit ReactJS Feed Data</h1>
      </header>
      <main>
        <RedditData />
      </main>
    </div>
  );
}

export default App;

