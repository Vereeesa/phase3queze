import { Topic } from '../type/gameType';

export type GameActionType = {
  type: 'topic/load';
  payload: Topic[];
};
