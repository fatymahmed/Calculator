import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import '../logic/calculate';

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);
export default App;
