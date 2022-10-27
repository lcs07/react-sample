import React from 'react';

import '../App.css';
import {Test, testStr} from './test';

const App2 = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>{testStr}</p>
        <Test testData='2' />
      </header>
    </div>
  );
}

export default App2;
