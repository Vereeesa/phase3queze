import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
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
      </ul>
    </nav>
  );
}

export default Navbar;
