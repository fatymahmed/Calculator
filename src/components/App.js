import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

import './App.css';

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);
export default App;
