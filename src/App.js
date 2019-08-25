import React from 'react';
import './App.css';
import Header from './sections/header';

let App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className='gap' style={{height: '100vh'}}></div>
      <span style={{color: 'white'}}>fuck</span>
    </div>
  );
}

export default App;
