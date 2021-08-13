import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Modal from './components/Modal';

function App() {
  const [state, setState] = useState({
    isOpen: false,
    number: 0,
  });

  return (
    <div className="App">
      <div className="wrapper">
        <h1>The Periodic Table of Elements</h1>
        <Table setState={setState} />
        <Modal open={state.isOpen} number={state.number} setState={setState} />
      </div>
    </div>
  );
}

export default App;
