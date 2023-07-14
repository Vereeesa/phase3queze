import React, { useDispatch, useSelector } from 'react-redux';
import GameCard from './GameCard';
import { Question, Topic } from './type/gameType';
import { RootStateType } from '../../store';
import { useEffect } from 'react';
import { json } from 'stream/consumers';

function GameList(): JSX.Element {
  const { topics } = useSelector((store: RootStateType) => store.topicReducer);

  const dispatch = useDispatch();

  useEffect(()=>{
    fetch('/api/topics') 
    .then((response) => response.json())
    .then((data) => dispatch({ type: 'topic/load', payload: data }))
  },[]);


  return (
    <div className="quiz-list">
      <div className="row">
        {topics.map((topic: Topic) => (
          <div className="topic-row" key={topic.topicName}>
            <h2 className="topic-name">{topic.topicName}</h2>
            <div className="card-row">
              {topic.Questions.map((question: Question) => (
                <GameCard key={question.id} question={question} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameList;
