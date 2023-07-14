import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../style/authStyle.scss';

export default function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onHadleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    dispatch({
      type: 'auth/reg',
      payload: data
    });
    navigate('/');
  };

  return (
    <div className="form__container">
      <form onSubmit={onHadleSubmit} className="form__add-animal">
        <label className="form__label">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <label className="form__label">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>
        <label className="form__label">
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <p className="error">{}</p>
        <button type="submit">SingUp</button>
      </form>
    </div>
  );
}
