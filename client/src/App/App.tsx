import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from '../features/Navbar/Navbar';
import Main from '../features/Main/Main';
import GameList from '../features/Game/GameList';
import Login from '../features/User/components/Login';
import Registration from '../features/User/components/Registration';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/auth/check')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'auth/check', payload: data }));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<GameList />} />
        <Route path="/auth/registration" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="*" element={<div><img src="/404.gif" alt="Not Found" /><h3>Ты зашел не туда - такой страницы нет</h3></div>} />
      </Routes>

    </div>
  );
}

export default App;
