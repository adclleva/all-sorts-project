import React from 'react';
import './App.css';
import AllSorts from './components/allSorts/AllSorts.js'
import Options from './components/options/Options.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to allSorts!</h1> 
        <AllSorts />
        <Options />
      </div>
    )
  }
}

export default App;

