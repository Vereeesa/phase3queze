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
    await fetch('/api/auth/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'auth/logout' });
    navigate('/');
  };
  return (
    <nav className={styles.navbar}>
      <ul className={styles.container}>

            <div
              className={styles.navbar__link}
            >
              Очки:
            </div>

        <div>
          <Link
            className={styles.navbar__link}
            to="/game"
          >Игра
          </Link>
        </div>
        {!user?.name ? (
                <>

                    <NavLink
                      className={styles.navbar__link}
                      to="/auth/login"
                    >
                      Войти
                    </NavLink>

                    <NavLink
                      className={styles.navbar__link}
                      to="/auth/registration"
                    >
                      Регистрация
                    </NavLink>

                </>
              ) : (
                <>
                  <div className={styles.navbar__link}>Приветствуем, {user?.name}</div>
                  <div>
                    <NavLink
                      onClick={handleLogOut}
                      className={styles.navbar__logout}
                      to="/"
                    >
                      Выйти
                    </NavLink>
                  </div>
                </>
              )}
      </ul>
    </nav>
  );
}

export default Navbar;
