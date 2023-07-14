import React, { useSelector } from 'react-redux';
import GameCard from './GameCard';
import { Question, Topic } from './type/gameType';
import { RootStateType } from '../../store';

function GameList(): JSX.Element {
  const { topics } = useSelector((store: RootStateType) => store.topicReducer);
  return (
    <div className="quiz-list">
      <div className="row">
        {topics.map((topic: Topic) => (
          <div className="topic-row" key={topic.topicName}>
            <h2 className="topic-name">{topic.topicName}</h2>
            <div className="card-row">
              {topic.Question.map((question: Question) => (
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
