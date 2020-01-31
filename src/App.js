import React from 'react';
import styled from '@emotion/styled'
import './App.css';
import List from './List/List';

const AppContainer = styled('div')`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
AppContainer.displayName = 'AppContainer'


function App() {
  return (
    <AppContainer >
      <header className="App-header">
        <List />
      </header>

    </AppContainer>
  );
}

export default App;
