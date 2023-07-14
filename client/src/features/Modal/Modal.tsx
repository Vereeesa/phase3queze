import React from 'react';

import './modal.css';

function Modal({ active, setActive, children } : any): JSX.Element {
    return (
        <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)} /* ЧТОБЫ ПРИ НАЖАТИИ НА ЗАТЕМНЕННУЮ ОБЛАСТЬ ОКНО !ЗАКРЫВАЛОСЬ! */>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation} /* ЧТОБЫ ПРИ НАЖАТИИ НА КОНТЕНТНУЮ ЧАСТЬ ОКНО ТАКЖЕ НЕ ЗАКРЫВАЛОСЬ */>
                 {children}
            </div>
        </div>
    );
}


export default Modal;