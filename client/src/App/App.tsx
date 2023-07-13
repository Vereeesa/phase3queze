import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/Main/Main';
import GameList from '../features/Game/GameList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<GameList />} />
      </Routes>
    </div>
  );
}

export default App;
