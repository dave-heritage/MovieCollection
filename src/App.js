import './App.css';
import React, { useState } from 'react';
import Form2 from './components/Form2';
import Paper from '@material-ui/core/Paper';
import TabMenu from './components/TabMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={4}>
          <TabMenu />
        </Paper>
      </header>
    </div>
  );
}

export default App;
