import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/Main/Main';
import GameList from '../features/Game/GameList';
import Login from '../features/User/components/Login';
import Registration from '../features/User/components/Registration';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<GameList />} />
        <Route path="/auth/registration" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
