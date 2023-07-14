import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { RootStateType } from '../../store';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootStateType) => store.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut: React.MouseEventHandler<HTMLAnchorElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();
    await fetch('/api/auth/logout');
    dispatch({ type: 'auth/logout' });
    navigate('/');
  };
  return (
    <nav>
      <ul>
        <li>
          <div>
            <div>Очки:</div>
          </div>
        </li>
        <li>
          <Link to="/game">Игра</Link>
        </li>
        {!user?.name ? (
                <>
                  <li>
                    <NavLink
                      className={styles.navbar__link}
                      to="/auth/login"
                    >
                      Войти
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={styles.navbar__link}
                      to="/auth/registration"
                    >
                      Регистрация
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <NavLink className={styles.navbar__link} to="/game">
                    Game
                  </NavLink>
                  <li className={styles.navbar__link}>Hello, {user?.name}</li>
                  <li>
                    <NavLink
                      onClick={handleLogOut}
                      className={styles.navbar__logout}
                      to="/"
                    >
                      Выйти
                    </NavLink>
                  </li>
                </>
              )}
      </ul>
    </nav>
  );
}

export default Navbar;
