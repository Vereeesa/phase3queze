import React, { useState } from "react";
import Modal from '../Modal/Modal'


function Main(): JSX.Element {

  const [modalActive, setModalActive] = useState(true);

  return (
    <div>
      <h1 style={{ marginTop: "200px" }}>Хочешь сыграть?</h1>
      <Modal active={modalActive} setActive={setModalActive}>
        <div> НЕТ! </div>
      </Modal>
      <button className='open-btn' onClick={()=>setModalActive(true)}>Открыть модальное окно</button>
    </div>
  );
}

export default Main;