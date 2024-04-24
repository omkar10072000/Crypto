import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Slider from './Pages/Slider';
import Cointable from './Pages/Cointable';

const data = [
  { name: 'John', age: 30, email: 'john@example.com' },
  { name: 'Jane', age: 25, email: 'jane@example.com' },
  { name: 'Doe', age: 40, email: 'doe@example.com' },
];

function App() {

  return (
     <div className='App' >
      <Slider />
      <Cointable data={data}/>
      </div>
  );
}

export default App;
