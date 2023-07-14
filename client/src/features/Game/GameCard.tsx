import React, { useSelector } from "react-redux";
import { Question, Topic } from "./type/gameType";
import { RootStateType } from "../../store";
import { useState } from "react";
import Modal from "../Modal/Modal";

type QuestionPropsType = {
  question: Question;
};

function GameCard({ question }: QuestionPropsType): JSX.Element {
  
  const [modalActive, setModalActive] = useState(true);
  const [answer, setAnswer] = useState('');

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <form>
        <div>
          <img src={question.questionName} alt="question for a gamer" />
          <input
            type="text"
            defaultValue={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">Ответить</button>
        </form>
      </Modal>

      <button className="open-btn" type="submit" onClick={() => setModalActive(true)}>
        Показать вопрос
      </button>
    </>
  );
}

export default GameCard;
