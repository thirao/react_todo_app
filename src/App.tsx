import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleList from './components/hoge'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          sample Todo List
        </p>
      </header>
      <body 
                className="List-block"
      >
        <SimpleList />
      </body>
    </div>
  );
}

export default App;
