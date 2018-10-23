import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Components
import DisplayData from './components/Display/DisplayData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayData />
      </div>
    );
  }
}

export default App;
