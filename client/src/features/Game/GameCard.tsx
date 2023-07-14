import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Question, Topic } from './type/gameType';
import { RootStateType } from '../../store';
import Modal from '../Modal/Modal';

type QuestionPropsType = {
  question: Question;
};

function GameCard({ question }: QuestionPropsType): JSX.Element {
  const [modalActive, setModalActive] = useState(false);

  const [answerResult, setAnswerResult] = useState('');

  const [answer, setAnswer] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (answer === question.answer) {
      setAnswerResult('Все верно. Молодец!');
      // fetch()
    } else {
      setAnswerResult(`Ответ не верный, верный ответ ${question.answer}`);
    }
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <img
              src={`${question.questionName}.jpeg`}
              style={{ width: '75vh' }}
              alt="question for a gamer"
            />
            <input type="text" defaultValue={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
          <div className="">{answerResult}</div>
          <button className="btn" type="submit">
            Ответить
          </button>
        </form>
      </Modal>

      <button className="open-btn" type="submit" onClick={() => setModalActive(true)}>
        Показать вопрос
      </button>
    </>
  );
}

export default GameCard;
