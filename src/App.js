import React from 'react';
import './App.css';
import Header from './sections/header';
import Intro from './sections/intro';
import Stores from './sections/stores'
import Photos from './sections/photos';

let App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className='gap' style={{height: '150vh'}}></div>
      <main>
        <Intro></Intro>
        <Stores></Stores>
        <Photos></Photos>
      </main>
    </div>
  );
}

export default App;
